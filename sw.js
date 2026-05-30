const CACHE_NAME = "medical-training-v1.1.0";
const ASSETS = [
  "./?v=1.1.0",
  "index.html?v=1.1.0",
  "styles.css?v=1.1.0",
  "questions.js?v=1.1.0",
  "app.js?v=1.1.0",
  "extra-questions.js?v=1.1.0",
  "sound.js?v=1.1.0",
  "manifest.webmanifest?v=1.1.0",
  "icons/icon.svg?v=1.1.0"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseCopy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
