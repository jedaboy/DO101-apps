var express = require('express');
server = express();

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

