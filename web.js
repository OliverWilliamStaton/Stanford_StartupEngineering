var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

fs.readFile("index.html", function (err, data) {
  if (err) {
    throw err;
  }
  app.get('/', function(request, resonse) {
    var buf = new Buffer(data);
    response.send(buf.toString());
  });

  var port = process.env.PORT || 5000;
  app.listen(port, function() {
    console.log("Listening on " + port);
  });
});
