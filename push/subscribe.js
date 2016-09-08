


Notification.requestPermission(result => result === 'granted' ? Promise.resolve() : Promise.reject())
	.then(() => navigator.serviceWorker.ready)
	.then(registration => registration.pushManager)
	.then(pushManager => subscribe(pushManager))
	.then(subscription => showInDom(subscription))
	.catch(console.log);



function subscribe(pushManager) {

	return pushManager.getSubscription().then(subscription => {

		return subscription || pushManager.subscribe({ userVisibleOnly: true })

	});

}



function showInDom(subscription) {
	document.getElementById('response').innerHTML = JSON.stringify(subscription);
}