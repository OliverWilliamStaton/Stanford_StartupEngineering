var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
var fileName = "index.html";

fs.stat(fileName, function(error,stats) {
  
  fs.open(fileName, "r", function(error,fd) {

    var buf = new Buffer(stats.size);

    fs.read(fd, buf, 0, buf.length, null, function(error, bytesRead, buf) {
      
      app.get('/', function(request,response) {
        var data = buf.toString("utf-8", 0, buf.length);
        response.send(data);
      });

      var port = process.env.PORT || 5000;

      app.listen(port,function() {
        console.log("Listening on " + port);
      });

      fs.close(fd);
    });
  });
});
