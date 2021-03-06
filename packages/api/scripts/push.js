const webPush = require("web-push");
const atob = require('atob');
require("dotenv").config()

const vapidKeys = {
  publicKey: process.env.VAPID_PUB_KEY,
  privateKey: process.env.VAPID_PRI_KEY
}
console.log(vapidKeys)

webPush.setVapidDetails(
  "mailto:greykhan@open-gov.grey.software",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const vapidPublicKey = vapidKeys.publicKey;
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
console.log(convertedVapidKey);
