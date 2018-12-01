const https = require('https');
const format = require('date-fns/format');

var hosts = [
  'https://dream-state-app.herokuapp.com/',
  'https://re-crypt.herokuapp.com/',
];
var interval = 1000 * 60 * 60; // 1 hour

setInterval(() => {
  hosts.forEach(host => {
    https.get(host, res => {
      console.log(
        `[${format(Date.now(), 'YY-MM-DD HH:MM:SS')}] Contacted ${host}`
      );
    });
  });
}, interval);
