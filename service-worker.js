
        self.addEventListener('install', (event) => {
            event.waitUntil(
                caches.open('game-cache').then((cache) => {
                    return cache.addAll([
                        '/',
                        '/index.html',
                        '/build/UnityLoader.js',
                        '/build/UnityLoader.js.mem',
                        '/icon.png',
                        '/icon-512x512.png',
                        '/manifest.json',
                        // Add more assets if necessary
                    ]);
                })
            );
        });

        self.addEventListener('fetch', (event) => {
            event.respondWith(
                caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    return fetch(event.request);
                })
            );
        });
        