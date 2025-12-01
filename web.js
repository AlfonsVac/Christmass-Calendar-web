export const tasksJs = `const mainTasks = [
    { 
        day: 1, 
        title: "Vánoční hvězda", 
        icon: "star", 
        desc: "Zahraj si na blikající hvězdu na stromečku! Děláš 'skákacího panáka' (Jumping Jack) pro kondici a dřepy pro sílu na nošení dárků.", 
        levels: ["20 panáků + 10 dřepů", "50 panáků + 25 dřepů", "100 panáků + 50 dřepů"], 
        fact: "Víte, že jméno 'prosinec' pochází od slova 'prosiněti', což znamená prosvítat (slunce mezi mraky)?" 
    },
    { day: 2, title: "Smích & Plank", icon: "smile", desc: "Jeden drží plank, druhý ho rozesmívá. Kdo se zasměje, dělá trestné kliky!", levels: ["3x 20 sekund", "3x 30 sekund", "3x 60 sekund"], fact: "Dnes má svátek Blanka. Do Vánoc zbývá 22 dní!" },
    { day: 3, title: "Adventní procházka", icon: "footprints", desc: "Svižná chůze venku. Najdi 3 vánoční ozdoby ve výlohách.", levels: ["15 min chůze", "30 min chůze", "45 min chůze + běh"], fact: "Proč nemá Santa Claus děti? Protože pytel má na zádech a koule na stromečku." },
    { day: 4, title: "Core & More", icon: "activity", desc: "Russian twists, výpady, kliky, angličáky. Rychle a efektivně.", levels: ["2 kola", "3 kola", "4 kola bez pauzy"], fact: "Svátek má Barbora. Utrhni třešňovou větvičku. Pokud do Vánoc vykvete, budeš mít štěstí!" },
    { day: 5, title: "Protažení u světýlek", icon: "flame", desc: "Jemné protažení, dech a klid při svíčkách.", levels: ["5 min strečink", "10 min dýchání", "20 min jóga"], fact: "Dnes večer chodí Mikuláš, čert a anděl. Doufám, že máš čisté svědomí... a cvičební úbor!" },
    { day: 6, title: "Mikulášská výzva", icon: "gift", desc: "Dřepy, kliky, jumping jacks. Kdo se vzdá, platí čokoládu!", levels: ["3 kola (10 opak.)", "6 kol (10 opak.)", "10 kol (10 opak.)"], fact: "Původní svatý Mikuláš zachránil tři dcery chudého otce tím, že jim vhodil oknem zlato." },
    { day: 7, title: "Partner HIIT", icon: "timer", desc: "20s cvik / 10s pauza. Dřepy, plank, horolezec, výpady.", levels: ["2 kola", "3 kola", "5 kol"], fact: "Víte, že píseň 'Tichá noc' byla poprvé hrána na kytaru, protože kostelní varhany byly rozbité?" },
    { day: 8, title: "Outdoor běh", icon: "wind", desc: "Společný běh v lehkém tempu. Zakončeno čajem.", levels: ["2 km indián", "3-5 km běh", "6+ km tempo"], fact: "Dnes má svátek Květoslava. Ideální den na běhání mezi vločkami." },
    { day: 9, title: "Jóga pro dva", icon: "heart", desc: "Sestava na záda a boky. Ideální po včerejším běhu.", levels: ["10 min relax", "20 min flow", "30 min power"], fact: "Vánoční vtip: Co dělá kapr v obýváku? Čeká na ránu z milosti... nebo na pohádku." },
    { day: 10, title: "Dance Battle", icon: "music", desc: "Pusť písničky a dej si taneční souboj. Vítěz vybírá film.", levels: ["1 písnička", "2 písničky", "3 písničky + choreo"], fact: "První umělé vánoční stromky byly vyrobeny z husího peří obarveného na zeleno." },
    { day: 11, title: "Kardio výzva", icon: "trending-up", desc: "Schody, švihadlo nebo běh na místě. Cíl: Zpotit tričko!", levels: ["15 min v kuse", "30 min v kuse", "45 min"], fact: "Do Vánoc zbývá 13 dní. Třináctka je šťastné číslo pro tvoje svaly!" },
    { day: 12, title: "Silová dvojhra", icon: "users", desc: "Vyber 3 cviky. Střídání po 40s. Po kole pusa místo pauzy.", levels: ["2 kola", "4 kola", "6 kol"], fact: "Víte, že píseň 'Jingle Bells' byla původně napsána k Díkůvzdání, ne k Vánocům?" },
    { day: 13, title: "Core Challenge", icon: "shield", desc: "Horolezec (Climbers), nůžky, plank taps.", levels: ["2 kola", "3 kola", "4 kola + výdrž"], fact: "Svátek má Lucie. 'Lucie noci upije a dne nepřidá.' Ale my si přidáme sérii navíc!" },
    { day: 14, title: "Film & Stretch", icon: "tv", desc: "Pusť si film a protahuj se u něj na koberci.", levels: ["10 min nohy", "20 min celé tělo", "Každou reklamu"], fact: "Vtip: 'Mami, můžu mít na Vánoce psa?' 'Ne, budeš mít kapra jako ostatní.'" },
    { day: 15, title: "Vysoký výkon", icon: "zap", desc: "Burpees, dřepy, kliky, plank. Měř si čas!", levels: ["2 kola max", "4 kola max", "6 kol na čas"], fact: "Už jen 9 dní do Štědrého dne. Už máš dárky? Ne? Tak si dej aspoň trénink." },
    { day: 16, title: "Dýchací den", icon: "wind", desc: "Jen dech a relax. Zastav se v předvánočním shonu.", levels: ["5 min box breath", "10 min meditace", "15 min Wim Hof"], fact: "Víte, že Norové schovávají o Vánocích košťata, aby jim je neukradly čarodějnice?" },
    { day: 17, title: "Outdoor kopce", icon: "mountain", desc: "Svižná chůze nebo běh do kopce. Fotka nahoře povinná.", levels: ["20 min chůze", "45 min výšlap", "45 min sprinty"], fact: "Svátek má Daniel. Čas vyběhnout ven a udělat sněhuláka (nebo angličáky)." },
    { day: 18, title: "Párový workout", icon: "heart-handshake", desc: "Výpady, plank s plácnutím, panák.", levels: ["2 kola", "3 kola", "5 kol"], fact: "Víte, že vánočka má svým tvarem připomínat Ježíška v zavinovačce?" },
    { day: 19, title: "Klidný večer", icon: "moon", desc: "Jóga, čaj a pohoda. Žádný stres.", levels: ["10 min pozdrav slunci", "20 min yin", "30 min párová"], fact: "Pepíček píše Ježíškovi: 'Pošli mi bratříčka.' Ježíšek odepíše: 'Pošli mi maminku.'" },
    { day: 20, title: "Zimní sporty", icon: "snowflake", desc: "Běžky, brusle, badminton nebo jen koulovačka.", levels: ["30 min aktivity", "60 min aktivity", "90+ min sportu"], fact: "Svátek má Dagmar. Už jen 4 dny! To uteče jako voda." },
    { day: 21, title: "Outdoor rande", icon: "coffee", desc: "Procházka zakončená svařákem/čajem. Udělejte si selfie.", levels: ["Krátká procházka", "Dlouhá procházka", "Výlet"], fact: "Zimní slunovrat! Dnešek je nejkratší den v roce. Trénink musí být rychlý." },
    { day: 22, title: "Partner Plank", icon: "repeat", desc: "Jeden drží plank, druhý dělá dřepy. Pak výměna.", levels: ["2x výměna", "3x výměna", "5x výměna"], fact: "Víš, proč má Santa tak velké břicho? Protože jednou ročně pracuje a zbytek roku jen jí cukroví." },
    { day: 23, title: "Recovery", icon: "battery-charging", desc: "Pěnový válec, masáž nebo vana. Ticho a klid.", levels: ["10 min masáž", "20 min strečink", "30 min válec"], fact: "Dnes má svátek Vlasta. Zítra to vypukne! Nezapomeň na poslední přípravy." },
    { day: 24, title: "Vánoční Finále!", icon: "star", desc: "Pohyb dle výběru + velké objetí. Užijte si Štědrý den!", levels: ["12 min rozcvička", "24 min běh", "24 min HIIT"], fact: "Štědrý den! Adam a Eva mají svátek. Užij si pohodu, dárky a... dnešní speciální výzvu! 🎄" }
];`;

export const html = `<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Vánoční Fitness Kalendář</title>
    
    <!-- PWA / App Settings -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="#1a472a">
    <meta name="mobile-web-app-capable" content="yes">
    
    <!-- App Icon -->
    <link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' style='background:%23166534'%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='350' fill='white'%3E🎄%3C/text%3E%3C/svg%3E">
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' style='background:%23166534'%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='350' fill='white'%3E🎄%3C/text%3E%3C/svg%3E">
    <link rel="manifest" href='data:application/manifest+json;base64,eyJuYW1lIjoiVmFub2NuaSBVyL16dmEiLCJzaG9ydF9uYW1lIjoiQWR2ZW50Rml0Iiwic3RhcnRfdXJsIjoiLiIsImRpc3BsYXkiOiJzdGFuZGFsb25lIiwiYmFja2dyb3VuZF9jb2xvciI6IiMxYTQ3MmEiLCJ0aGVtZV9jb2xvciI6IiMxYTQ3MmEifQ=='>

    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&family=Quicksand:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Quicksand', sans-serif;
            background-color: #1a472a;
            background-image: 
                radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 3px),
                radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 2px),
                radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 3px);
            background-size: 550px 550px, 350px 350px, 250px 250px;
            background-position: 0 0, 40px 60px, 130px 270px;
            color: #333;
            overscroll-behavior-y: none;
            -webkit-tap-highlight-color: transparent;
        }
        
        h1, h2, .day-number { font-family: 'Mountains of Christmas', cursive; }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
            gap: 12px;
            max-width: 800px;
            margin: 0 auto;
            padding-bottom: 80px;
        }
        @media (min-width: 640px) {
            .calendar-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 20px; }
        }

        .door {
            aspect-ratio: 1;
            background: #b91c1c;
            border: 3px solid #fcd34d;
            border-radius: 12px;
            cursor: pointer;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            -webkit-user-select: none;
            user-select: none;
        }
        .door:active { transform: scale(0.95); }
        .door.open { background: #f3f4f6; border-color: #166534; }
        .door.locked { filter: grayscale(0.6); cursor: not-allowed; opacity: 0.8; }
        .door.completed .status-icon { color: #166534; }
        .day-number { font-size: 2rem; color: #fcd34d; font-weight: 700; text-shadow: 2px 2px 0px #7f1d1d; }
        @media (min-width: 640px) { .day-number { font-size: 2.5rem; } }
        .door.open .day-number { display: none; }
        .door-revealed { display: none; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 2px; }
        .door.open .door-revealed { display: flex; }

        /* Modal Transitions */
        #taskModal, #installModal { backdrop-filter: blur(5px); transition: opacity 0.3s ease; }
        .modal-content { background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E"); }
        
        .level-btn {
            flex: 1;
            padding: 12px 4px;
            font-size: 0.85rem;
            font-weight: 700;
            border-radius: 12px;
            transition: all 0.2s;
            border: 2px solid transparent;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }
        .level-btn.active { transform: scale(1.05); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        
        .lvl-easy.active { background-color: #dcfce7; color: #166534; border-color: #166534; }
        .lvl-medium.active { background-color: #fef9c3; color: #854d0e; border-color: #ca8a04; }
        .lvl-hard.active { background-color: #fee2e2; color: #991b1b; border-color: #991b1b; }
        
        .lvl-inactive { background-color: #f9fafb; color: #9ca3af; border-color: #e5e7eb; }

        .btn-christmas { background-color: #166534; color: white; transition: all 0.3s; }
        .btn-christmas:active { background-color: #14532d; transform: scale(0.98); }
        
        .btn-reveal { background: linear-gradient(135deg, #b91c1c 0%, #991b1b 100%); color: white; }
        .btn-reveal:active { transform: scale(0.98); }

        .app-footer { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); padding: 10px; display: flex; justify-content: space-around; align-items: center; z-index: 40; border-top: 1px solid rgba(255,255,255,0.1); }
        .install-guide-step { margin-bottom: 12px; padding: 10px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #166534; }
        
        /* Utility to force hide elements */
        .hidden-view { display: none !important; }
        
        .fade-enter { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body class="min-h-screen">

    <header class="text-center pt-8 pb-4 px-4">
        <h1 class="text-4xl md:text-6xl text-white mb-2 drop-shadow-lg">Adventní Výzva</h1>
        <div class="mt-2 text-yellow-300 text-sm font-bold bg-black/30 inline-block px-4 py-1 rounded-full">
            Dnes je: <span id="currentDateDisplay"></span>
        </div>
    </header>

    <main id="calendar" class="calendar-grid px-4">
        <!-- Doors will be generated here -->
    </main>

    <div class="app-footer">
        <button onclick="resetProgress()" class="text-white/70 hover:text-white flex flex-col items-center gap-1">
            <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
            <span class="text-[10px]">Reset</span>
        </button>
        <div class="text-white/40 text-xs">2025</div>
        <button onclick="showInstallModal()" class="text-yellow-400 hover:text-yellow-300 flex flex-col items-center gap-1 animate-pulse">
            <i data-lucide="download" class="w-5 h-5"></i>
            <span class="text-[10px] font-bold">Stáhnout</span>
        </button>
    </div>

    <!-- Main Modal -->
    <div id="taskModal" class="fixed inset-0 bg-black/80 hidden flex items-center justify-center z-50 p-4 opacity-0 pointer-events-none">
        <div class="modal-content bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform scale-95 transition-all duration-300 flex flex-col max-h-[90vh]">
            
            <!-- Modal Header (Static) -->
            <div class="h-20 bg-red-700 flex items-center justify-center relative overflow-hidden shrink-0">
                <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/snow.png')]"></div>
                <h2 id="modalDayTitle" class="text-2xl text-white font-bold relative z-10 font-sans">1. Prosinec</h2>
                <button onclick="closeModal('taskModal')" class="absolute top-2 right-2 text-white/80 hover:text-white p-2 z-20">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>

            <!-- Content Area -->
            <div class="p-5 overflow-y-auto relative min-h-[350px]">
                
                <!-- VIEW 1: INTRO & SELECTION -->
                <div id="viewIntro" class="flex flex-col h-full justify-between">
                    <div>
                        <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6 text-center relative">
                            <i data-lucide="sparkles" class="w-5 h-5 text-blue-400 absolute top-2 left-2"></i>
                            <div class="text-xs font-bold text-blue-800 uppercase mb-2 tracking-wide">Vánoční zajímavost</div>
                            <p id="modalFunFact" class="text-gray-700 font-medium italic">...</p>
                        </div>
                        
                        <div class="text-center mb-4">
                            <h3 class="text-gray-800 font-bold mb-2">Jak moc se dnes cítíš?</h3>
                            <p class="text-xs text-gray-500 mb-4">Vyber si obtížnost. Úkol uvidíš až poté!</p>
                            
                            <div class="flex gap-2">
                                <button onclick="setLevel(0)" id="btnLvl0" class="level-btn lvl-easy">
                                    <span class="text-lg">😌</span> POHODA
                                </button>
                                <button onclick="setLevel(1)" id="btnLvl1" class="level-btn lvl-medium active">
                                    <span class="text-lg">😅</span> MAKAČKA
                                </button>
                                <button onclick="setLevel(2)" id="btnLvl2" class="level-btn lvl-hard">
                                    <span class="text-lg">😈</span> VÝZVA
                                </button>
                            </div>
                        </div>
                    </div>

                    <button onclick="revealTask()" class="btn-reveal w-full py-4 rounded-xl text-xl font-bold flex items-center justify-center gap-2 shadow-lg mt-4">
                        <span>Jdeme do toho!</span>
                        <i data-lucide="arrow-right-circle" class="w-6 h-6"></i>
                    </button>
                </div>

                <!-- VIEW 2: REVEALED TASK (Initially Hidden) -->
                <div id="viewTask" class="hidden-view flex flex-col h-full justify-between">
                    <div>
                        <div class="text-center mb-2 animate-bounce">
                            <i id="taskIcon" data-lucide="gift" class="w-12 h-12 text-red-600 mx-auto"></i>
                        </div>
                        <div class="text-center mb-6">
                            <h3 id="modalActivityName" class="text-2xl text-gray-800 font-bold mb-2">Název</h3>
                            <p id="modalDesc" class="text-gray-600 text-sm leading-relaxed">Popis...</p>
                        </div>

                        <div class="bg-yellow-50 p-5 rounded-xl border border-yellow-200 mb-6 text-center shadow-sm relative overflow-hidden">
                            <div class="absolute top-0 left-0 bg-yellow-400 text-[10px] font-bold px-2 py-0.5 text-white rounded-br-lg" id="levelLabel">MAKAČKA</div>
                            <div class="text-xs font-bold text-yellow-800 uppercase mb-2">Tvůj dnešní cíl</div>
                            <div id="modalTarget" class="text-2xl font-bold text-gray-900">Cíl...</div>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <button id="completeBtn" class="btn-christmas w-full py-4 rounded-xl text-xl font-bold flex items-center justify-center gap-2 shadow-lg">
                            <span>Splněno!</span>
                            <i data-lucide="check-circle" class="w-6 h-6"></i>
                        </button>
                        <div class="text-center text-[10px] text-gray-400 italic">
                            Úkol již nejde změnit. Bojuj!
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- Install Help Modal -->
    <div id="installModal" class="fixed inset-0 bg-black/90 hidden flex items-center justify-center z-50 p-4 opacity-0 pointer-events-none">
        <div class="bg-white w-full max-w-sm rounded-2xl p-6 relative">
            <button onclick="closeModal('installModal')" class="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
            <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"><i data-lucide="smartphone" class="text-green-700"></i> Jak nainstalovat?</h3>
            <div class="text-sm text-gray-600 mb-4">Tato stránka funguje jako aplikace. Nemusíš nic stahovat, stačí ji <b>Přidat na plochu</b>.</div>
            <div class="space-y-3 text-sm">
                <div class="install-guide-step">
                    <div class="font-bold text-gray-800 mb-1 flex items-center gap-2"><i data-lucide="apple" class="w-4 h-4"></i> iPhone (Safari)</div>
                    1. Klikni dole na <b>Sdílet</b> <i data-lucide="share" class="inline w-3 h-3"></i><br>2. Vyber <b>Přidat na plochu</b> <i data-lucide="plus-square" class="inline w-3 h-3"></i>
                </div>
                <div class="install-guide-step">
                    <div class="font-bold text-gray-800 mb-1 flex items-center gap-2"><i data-lucide="smartphone" class="w-4 h-4"></i> Android (Chrome)</div>
                    1. Klikni na <b>Menu</b> (tři tečky) <i data-lucide="more-vertical" class="inline w-3 h-3"></i><br>2. Vyber <b>Přidat na plochu</b>.
                </div>
            </div>
            <button onclick="closeModal('installModal')" class="mt-4 w-full py-3 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200">Rozumím</button>
        </div>
    </div>

    <canvas id="confetti" class="fixed inset-0 pointer-events-none z-50 hidden"></canvas>

    <script src="tasks.js"></script>
    <script>
        // --- Data: Tasks + Fun Facts ---
        // mainTasks are now loaded from tasks.js

        // --- Logic ---
        const today = new Date();
        // const today = new Date(2025, 11, 24); // TEST DATE
        
        const currentMonth = today.getMonth(); 
        const currentDay = today.getDate();
        const storageKey = 'adventWorkoutProgress_2025_v3';
        let progress = JSON.parse(localStorage.getItem(storageKey)) || [];

        // State variables
        let activeTaskData = null;
        let activeDayNum = 0;
        let selectedLevel = 1; // Default to Medium

        function isLocked(day) {
            if (currentMonth !== 11) return true; 
            return day > currentDay;
        }

        function initCalendar() {
            const grid = document.getElementById('calendar');
            const dateDisplay = document.getElementById('currentDateDisplay');
            dateDisplay.textContent = today.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long' });
            
            if (currentMonth !== 11) dateDisplay.textContent += " (Brzy to začne!)";

            grid.innerHTML = '';
            mainTasks.forEach(task => {
                const isDone = progress.includes(task.day);
                const locked = isLocked(task.day);
                
                const door = document.createElement('div');
                door.className = \`door \${locked ? 'locked' : ''} \${isDone ? 'open completed' : ''}\`;
                door.onclick = () => openDoor(task, door);

                const number = document.createElement('div');
                number.className = 'day-number';
                number.textContent = task.day;

                const revealed = document.createElement('div');
                revealed.className = 'door-revealed';
                
                let iconName = isDone ? 'check' : task.icon;
                revealed.innerHTML = \`<i data-lucide="\${iconName}" class="status-icon w-6 h-6 text-gray-400"></i><span class="text-[10px] font-bold mt-1 text-gray-600 leading-tight">\${isDone ? 'HOTOVO' : 'OTEVŘÍT'}</span>\`;

                door.appendChild(number);
                door.appendChild(revealed);
                grid.appendChild(door);
            });
            lucide.createIcons();
        }

        function openDoor(task, element) {
            if (element.classList.contains('locked')) {
                element.style.transform = 'translateX(5px)';
                setTimeout(() => element.style.transform = 'translateX(-5px)', 100);
                setTimeout(() => element.style.transform = 'none', 200);
                return;
            }

            activeTaskData = task;
            activeDayNum = task.day;
            selectedLevel = 1; // Reset to Medium on new open

            // Reset Views: Show Intro, Hide Task
            document.getElementById('viewIntro').classList.remove('hidden-view');
            document.getElementById('viewTask').classList.add('hidden-view');
            // Remove animation class so it can play again if re-triggered
            document.getElementById('viewTask').classList.remove('fade-enter');

            // Populate Intro Data
            document.getElementById('modalDayTitle').textContent = \`\${activeDayNum}. Prosinec\`;
            document.getElementById('modalFunFact').textContent = task.fact;
            
            updateLevelUI(); // Reset buttons UI

            // Check if already done
            const isDone = progress.includes(activeDayNum);
            if (isDone) {
                revealTask(true);
            } else {
                openModal('taskModal');
            }
        }

        function setLevel(lvl) {
            selectedLevel = lvl;
            updateLevelUI();
        }

        function updateLevelUI() {
            const btns = [document.getElementById('btnLvl0'), document.getElementById('btnLvl1'), document.getElementById('btnLvl2')];
            const classes = ['lvl-easy', 'lvl-medium', 'lvl-hard'];
            
            btns.forEach((btn, idx) => {
                btn.className = \`level-btn \${idx === selectedLevel ? classes[idx] + ' active' : 'lvl-inactive'}\`;
            });
        }

        function revealTask(instant = false) {
            // Populate Task Data
            document.getElementById('modalActivityName').textContent = activeTaskData.title;
            document.getElementById('modalDesc').textContent = activeTaskData.desc;
            document.getElementById('modalTarget').textContent = activeTaskData.levels[selectedLevel];
            document.getElementById('taskIcon').setAttribute('data-lucide', activeTaskData.icon);

            // Level Label
            const lvlNames = ["POHODA", "MAKAČKA", "VÝZVA"];
            const lvlColors = ["bg-green-500", "bg-yellow-400", "bg-red-500"];
            const label = document.getElementById('levelLabel');
            label.textContent = lvlNames[selectedLevel];
            label.className = \`absolute top-0 left-0 text-[10px] font-bold px-2 py-0.5 text-white rounded-br-lg \${lvlColors[selectedLevel]}\`;

            // Handle Buttons for Completed state
            const btn = document.getElementById('completeBtn');
            const isDone = progress.includes(activeDayNum);
            
            if (isDone) {
                btn.textContent = "Již splněno";
                btn.classList.add('opacity-50');
                btn.onclick = () => closeModal('taskModal');
            } else {
                btn.innerHTML = \`<span>Splněno!</span> <i data-lucide="check-circle" class="w-6 h-6"></i>\`;
                btn.classList.remove('opacity-50');
                btn.onclick = () => completeTask(activeDayNum);
            }

            // Switch Views Logic
            const intro = document.getElementById('viewIntro');
            const taskView = document.getElementById('viewTask');

            if(instant) {
                 openModal('taskModal');
                 intro.classList.add('hidden-view');
                 taskView.classList.remove('hidden-view');
            } else {
                intro.classList.add('hidden-view'); // Hides intro immediately
                taskView.classList.remove('hidden-view'); // Shows task
                taskView.classList.add('fade-enter'); // Triggers animation
            }
            lucide.createIcons();
        }

        function completeTask(day) {
            if (!progress.includes(day)) {
                progress.push(day);
                localStorage.setItem(storageKey, JSON.stringify(progress));
                
                const doors = document.querySelectorAll('.door');
                const door = doors[day-1]; 
                door.classList.add('open', 'completed');
                door.querySelector('.day-number').style.display = 'none';
                door.querySelector('.door-revealed').style.display = 'flex';
                door.querySelector('.status-icon').setAttribute('data-lucide', 'check');
                door.querySelector('span').textContent = 'HOTOVO';
                lucide.createIcons();
                
                triggerConfetti();
            }
            closeModal('taskModal');
        }

        function openModal(id) {
            const m = document.getElementById(id);
            m.classList.remove('hidden');
            setTimeout(() => {
                m.classList.remove('opacity-0', 'pointer-events-none');
                m.querySelector('.modal-content').classList.remove('scale-95');
                m.querySelector('.modal-content').classList.add('scale-100');
            }, 10);
        }

        function closeModal(id) {
            const m = document.getElementById(id);
            m.classList.add('opacity-0', 'pointer-events-none');
            m.querySelector('.modal-content').classList.add('scale-95');
            m.querySelector('.modal-content').classList.remove('scale-100');
            setTimeout(() => m.classList.add('hidden'), 300);
        }

        function showInstallModal() { openModal('installModal'); }
        
        function resetProgress() {
            if(confirm("Opravdu vymazat postup?")) {
                localStorage.removeItem(storageKey);
                location.reload();
            }
        }

        function triggerConfetti() {
            const canvas = document.getElementById('confetti');
            canvas.classList.remove('hidden');
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const particles = [];
            for(let i=0; i<80; i++) particles.push({
                x: Math.random() * canvas.width, y: -10, r: Math.random() * 5 + 2, d: Math.random() * 5 + 2,
                color: \`hsl(\${Math.random()*360}, 70%, 50%)\`, tilt: Math.floor(Math.random()*10)-10
            });
            let angle = 0;
            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                angle += 0.01;
                particles.forEach((p, i) => {
                    p.y += Math.cos(angle + p.d) + 1 + p.r/2; p.x += Math.sin(angle) * 2;
                    ctx.beginPath(); ctx.lineWidth = p.r; ctx.strokeStyle = p.color;
                    ctx.moveTo(p.x + p.tilt + p.r/2, p.y); ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r/2); ctx.stroke();
                    if(p.y > canvas.height) particles.splice(i, 1);
                });
                if(particles.length > 0) requestAnimationFrame(draw); else canvas.classList.add('hidden');
            }
            draw();
        }

        window.addEventListener('load', initCalendar);
    </script>
</body>
</html>`;
