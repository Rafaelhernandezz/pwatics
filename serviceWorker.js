const TICsPWA = "dev-TICsPWA-site-v1";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/goku1.jpg",
    "/images/goku2.jpg",
    "/images/goku3.jpg",
    "/images/goku4.jpg",
    "/images/goku5.jpg",
    "/images/goku16.jpg",
    "/images/goku7.jpg",
    "/images/goku8.jpg",
    "/images/goku9.jpg"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(TICsPWA).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});