'use strict';



const VERSION = 'v1';



self.addEventListener('install', function() {

	console.log(`sync sw ${ VERSION } installed`, new Date().toString());

});



self.addEventListener('activate', function(event) {

	console.log(`sync sw ${ VERSION } activated`);

});



self.addEventListener('sync', function(event) {
	
	self.registration.showNotification("Hello!");

});