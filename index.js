const https = require('https');

var hosts = [
  'https://dream-state-app.herokuapp.com/',
  'https://re-crypt.herokuapp.com/',
];
var interval = 1000 * 60 * 60 * 24;

setInterval(() => {
  hosts.forEach(host => {
    https.get(host);
    console.log(`Contacting ${host}`);
  });
}, interval);
