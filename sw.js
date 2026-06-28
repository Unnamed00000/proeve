const CACHE_NAME = "study-quiz-v12";
const ASSETS = [
  "./",
  "index.html",
  "styles.css",
  "questions.js",
  "extra-questions.js",
  "upper-limb-questions.js",
  "app.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "assets/upper-limb-clean/arteries.jpg",
  "assets/upper-limb-clean/elbow.jpg",
  "assets/upper-limb-clean/forearm-extensors.jpg",
  "assets/upper-limb-clean/forearm-flexors.jpg",
  "assets/upper-limb-clean/hand-bones.jpg",
  "assets/upper-limb-clean/hand-muscles.jpg",
  "assets/upper-limb-clean/long-bones.jpg",
  "assets/upper-limb-clean/nerves.jpg",
  "assets/upper-limb-clean/scapula.jpg",
  "assets/upper-limb-clean/shoulder-muscles.jpg",
  "assets/upper-limb-clean/veins-lymph.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => caches.match("index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
