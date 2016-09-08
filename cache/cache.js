'use strict';

/**
 * Naive caching implementation
 * Diplay immediately from cache, then update in the background
 */

const CACHE_NAME = 'offline-cache';
const VERSION = 'v1';



self.addEventListener('install', function() {

	console.log(`cache sw ${ VERSION } installed`, new Date().toString());

});



self.addEventListener('activate', function(event) {

	console.log(`cache sw ${ VERSION } activated`);

	const cleanupCaches = caches.keys()
		.then(names => Promise.all(names.map(name => caches.delete(name))));

	event.waitUntil(cleanupCaches);

});



self.addEventListener('fetch', function(event) {

	const response = caches.match(event.request)
		.then(cachedResponse => new Promise(resolve => {

			console.log('in cache:', cachedResponse);

			// Cache hit: return cached response
			if (cachedResponse) {
				resolve(cachedResponse);
			}

			// Cache the resource using a cloned request
			fetch(event.request).then(response => {

				// Cloning is necessary, because the response body is consumed in the process and therefore can't be used again
				const copy = response.clone();

				if(validResponse(response)) {
					caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy))
				}

				// Return the response of the original request
				if (!cachedResponse) {
					resolve(response);
				}

			});

		}));

	event.respondWith(response);

});




function validResponse(response) {
	return response.status === 200 && (response.type === 'basic' || response.type === 'cors')
}