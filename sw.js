var cacheName = 'hello-pwa';
var filesToCache = [
    // L'ensemble de tes fichiers
    '/page1.html',
    '/page2.html',
    '/page3.html',
    '/',
    '/index.html',
    '/js/main.js',
    '/images/16.png',
    '/images/128.png',
    '/images/144.png',
    '/images/152.png',
    '/images/192.png',
    '/images/256.png',
    '/images/512.png',
    '/manifest.json'
];

// Met en cache le contenu de ton application
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// Code executé lorsque tu es offline
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});