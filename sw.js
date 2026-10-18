/* Pit Stop Study Timer — service worker.
   The whole app shell, including the bundled pixel fonts, is precached, so
   it works fully offline and makes no third-party requests.
   Bump CACHE_VERSION whenever any shell file changes. */
const CACHE_VERSION = 'v2';
const SHELL_CACHE = 'pitstop-shell-' + CACHE_VERSION;
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-64.png',
  './fonts/press-start-2p-latin-400-normal.woff2',
  './fonts/press-start-2p-latin-ext-400-normal.woff2',
  './fonts/vt323-latin-400-normal.woff2',
  './fonts/vt323-latin-ext-400-normal.woff2'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL_CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((k) => k !== SHELL_CACHE)
        .map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Same-origin: cache-first; navigations fall back to the cached shell.
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then((hit) =>
        hit || fetch(req).catch(() =>
          req.mode === 'navigate' ? caches.match('./index.html') : Response.error())
      )
    );
  }
});
