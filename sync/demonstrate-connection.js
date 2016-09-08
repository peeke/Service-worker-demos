


const permission = new Promise((resolve, reject) => {
	Notification.requestPermission(function(result) {
		if (result !== 'granted') return reject(Error("Denied notification permission"));
		resolve();
	})
});



document.getElementById('notify').addEventListener('click', () => {

	permission.then(() => navigator.serviceWorker.ready)
		.then(registration => registration.sync.register('sync'));

});