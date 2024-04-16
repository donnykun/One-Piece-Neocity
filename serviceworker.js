const CACHE_NAME = 'the-sunny-cache-v1';
const urlsToCache = [
  '/client/',
  '/client/index.html',
  '/client/index.css',
  '/client/index.js',
  '/client/assets/favicon.ico',
  '/client/assets/logpose-transparent.png',
  '/client/assets/one-piece-logo.png',
  '/client/assets/strawhat-group-photo.webp',
  '/client/assets/brook-rockstar-png.png',
  '/client/assets/brook-rockstar.gif',
  '/client/assets/strawhat-picture.png',
  '/client/assets/we-are.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
