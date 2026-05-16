#!/usr/bin/env python3
"""
Hlídá poslední odehrané skladby na Hitrádiu Orion a hlásí,
jestli mezi nimi byla "Být stále mlád" (Karel Gott).

Spouštěj přes cron / GitHub Actions klidně každých 10 minut.

Exit kódy:
  0  - skladba nalezena
  1  - skladba nenalezena
  2  - chyba (síť, parsování)
"""

import os
import re
import sys
import unicodedata
import requests
from bs4 import BeautifulSoup

URL = "https://hitradioorion.cz/playlist/hitradio-orion"

# Co hledáme (bez diakritiky, malá písmena pro porovnání)
NTFY_TOPIC = os.environ.get("NTFY_TOPIC", "orion-gott-x7k9q2")
HLEDANY_INTERPRET = "TWENTY 4 SEVEN"
HLEDANA_PISEN_KLICOVA_SLOVA = ["Is","It", "Love"]  # všechna musí být v názvu

def normalizuj(s: str) -> str:
    """Odstraní diakritiku, převede na malá písmena, sjednotí mezery."""
    nfkd = unicodedata.normalize("NFKD", s)
    bez = "".join(c for c in nfkd if not unicodedata.combining(c))
    return re.sub(r"\s+", " ", bez).strip().lower()


def stahni_playlist():
    """Vrátí seznam trojic (čas, název písně, interpret)."""
    r = requests.get(URL, headers={"User-Agent": "Mozilla/5.0"}, timeout=20)
    r.raise_for_status()
    soup = BeautifulSoup(r.text, "html.parser")

    # Vytáhneme čistý text a hledáme trojice řádků: HH:MM / název / INTERPRET
    text = soup.get_text("\n")
    radky = [r.strip() for r in text.splitlines() if r.strip()]

    pisne = []
    cas_re = re.compile(r"^\d{1,2}:\d{2}$")
    # Interpret na rádiu je vždy zapsaný velkými písmeny
    # (povolíme i čísla a běžné symboly: & / ' . , - mezera)
    interpret_re = re.compile(r"^[A-ZÁ-ŽÀ-ÖØ-Þ0-9&/'.,\- ]{2,}$")

    for i in range(len(radky) - 2):
        if cas_re.match(radky[i]) and interpret_re.match(radky[i + 2]):
            cas = radky[i]
            nazev = radky[i + 1]
            interpret = radky[i + 2]
            # Heuristika: název písně NESMÍ být napsaný celý velkými písmeny
            # (jinak by se nám interpret jevil jako název následované interpretem).
            # Trochu volnější, povolíme krátké TLA apod.
            pisne.append((cas, nazev, interpret))

    # Deduplikace při zachování pořadí
    videno = set()
    unikat = []
    for p in pisne:
        if p not in videno:
            videno.add(p)
            unikat.append(p)
    return unikat


def najdi(pisne):
    vysledek = []
    for cas, nazev, interpret in pisne:
        n_interpret = normalizuj(interpret)
        n_nazev = normalizuj(nazev)
        if HLEDANY_INTERPRET in n_interpret and all(
            slovo in n_nazev for slovo in HLEDANA_PISEN_KLICOVA_SLOVA
        ):
            vysledek.append((cas, nazev, interpret))
    return vysledek


def posli_notifikaci(zprava: str, nadpis: str = "Karel Gott na Orionu") -> None:
    try:
        requests.post(
            f"https://ntfy.sh/{NTFY_TOPIC}",
            data=zprava.encode("utf-8"),
            headers={
                "Title": nadpis,
                "Priority": "high",     # urgent / high / default / low / min
                "Tags": "musical_note",  # ikonka v notifikaci
            },
            timeout=10,
        )
    except Exception as e:
        print(f"ntfy selhal: {e}", file=sys.stderr)


def main():
    try:
        pisne = stahni_playlist()
    except Exception as e:
        print(f"Chyba: {e}", file=sys.stderr)
        sys.exit(2)

    if not pisne:
        print("Varování: nepodařilo se vyparsovat žádné skladby. "
              "Možná se změnila struktura webu.", file=sys.stderr)
        sys.exit(2)

    nalezeno = najdi(pisne)
    if nalezeno:
        zprava_radky = ["🎵 Karel Gott – Být stále mlád zazněl na Orionu:"]
        for cas, nazev, interpret in nalezeno:
            zprava_radky.append(f"  {cas} – {nazev} ({interpret})")
        zprava = "\n".join(zprava_radky)
        print(zprava)
        posli_notifikaci(zprava)
        sys.exit(0)
    else:
        print(f"Nenalezeno. Zkontrolováno {len(pisne)} skladeb "
              f"(od {pisne[-1][0]} do {pisne[0][0]}).")
        sys.exit(1)


if __name__ == "__main__":
    main()
