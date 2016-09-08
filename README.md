# Service-worker-demos
Short (naive) Service Worker demos

_Please note these are not production level examples._

## The push example
Please try the push example in Firefox, since not GCM id is provided. Update the subscription in `server-push.js` and run `node server-push.js` to send a push to the subscribed client.

When implementing for production, consider authorization through VAPID: https://developers.google.com/web/updates/2016/07/web-push-interop-wins
