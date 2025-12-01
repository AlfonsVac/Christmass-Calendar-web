/**
 * Vánoční Fitness Kalendář - Cloudflare Worker
 * Tento worker servíruje kompletní HTML/CSS/JS aplikaci jako statickou odpověď.
 * Obsah webu je importován ze souboru web.js
 */

import { html, tasksJs } from './web.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Obsluha požadavku na tasks.js
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
