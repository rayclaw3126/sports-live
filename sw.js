const CACHE = 'sports-live-v1';
const ASSETS = [
  '/sports-live/hub.html',
  '/sports-live/index.html',
  '/sports-live/slots.html',
  '/sports-live/penalty.html',
  '/sports-live/game.html',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
