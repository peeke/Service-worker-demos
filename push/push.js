'use strict';



const VERSION = 'v1';



self.addEventListener('install', function() {

	console.log(`push sw ${ VERSION } installed`, new Date().toString());

});



self.addEventListener('activate', function(event) {

	console.log(`push sw ${ VERSION } activated`);

});



self.addEventListener('push', event => {

	const payload = event.data.json();

	event.waitUntil(
		self.registration.showNotification(payload.title, {
			body: payload.body,
			data: {
				url: payload.url
			}
			// actions,
			// icon,
			// vibrate
		}));

});



self.addEventListener('notificationclick', event => {

	const openUrl = clients.matchAll({ type: 'window' })
		.then(() => clients.openWindow(event.notification.data.url));

	event.notification.close();
	event.waitUntil(openUrl);

});