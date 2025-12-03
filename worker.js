/**
 * Vánoční Fitness Kalendář - Cloudflare Worker
 * Tento worker servíruje kompletní HTML/CSS/JS aplikaci jako statickou odpověď.
 * Obsah webu je importován ze souboru web.js
 */

import { html, tasksJs } from './web.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 1. Pokus o obsloužení statických souborů (obrázky v /public/media)
    if (env.ASSETS) {
      try {
        const assetResponse = await env.ASSETS.fetch(request);
        // Pokud soubor existuje (status 200-399), vrátíme ho
        if (assetResponse.status >= 200 && assetResponse.status < 400) {
          return assetResponse;
        }
      } catch (e) {
        // Chyba při hledání assetu, pokračujeme dál
      }
    }

    // 2. Obsluha požadavku na tasks.js
    if (url.pathname.endsWith('/tasks.js')) {
      return new Response(tasksJs, {
        headers: { 'content-type': 'application/javascript;charset=UTF-8' }
      });
    }
    
    // Obsluha hlavního požadavku (vrací HTML)
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  },
};
