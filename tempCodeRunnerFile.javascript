var https = require('follow-redirects').https;
var fs = require('fs');
var dns = require('dns')
var options = {
  'method': 'POST',
  'host': "127.0.0.1",
  'port': 3034,
  'path': '/api/v1/auth/login',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2YWxlcmFAaGVsaW9zLmNvbSIsInJvbGUiOiJBRE1JTiIsImlkIjoxLCJpYXQiOjE2NTkzODc2NDEsImV4cCI6MTY1OTM5NDg0MX0.eGhP10QQHHCj2UiglqcsXCzkP8nnK4a-64Cb2kGpJTw'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({
  "password": "11111111",
  "email": "vasyapupkin@helios.com"
});

req.write(postData);

req.end();