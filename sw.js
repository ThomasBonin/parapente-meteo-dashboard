const CACHE = 'parapente-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', e => {
  // Réseau en priorité, cache en fallback
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
