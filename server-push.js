const webpush = require('web-push');

const subscription = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v1/gAAAAABX0Rc00s0YDA1aiavv_BWVPZA3DOLvA7ufjaF2JIOmwdssq9-1xb6XVlD3rh6Z8UTnXgoURJCjXWUzMzgYY8dRxpm2V3tG5tzgkXorkPskR_qkJmTU1TAh5zLn12G_uZcf7vaj","keys":{"auth":"eKGumPqqQaDENs4MSsYUQA","p256dh":"BBMpD8-z93DahhD9HWPrTwlLt-1xUkLh_Z4kDOLa36nP9I2QInCDCa1Zodd6EmcBQDtFD29uGMiS9Bhg5PKDExA"}};

const publication = {
	title: 'Hello from server!',
	body: 'This is push based.',
	url: 'http://localhost:8080/push'
};

webpush.sendNotification(subscription.endpoint, {
	TTL: 120,
	userPublicKey: subscription.keys.p256dh,
	userAuth: subscription.keys.auth,
	payload: JSON.stringify(publication) 
});
