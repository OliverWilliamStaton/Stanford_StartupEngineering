// Initialize variables
var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
var fileName = "index.html";

// Determine statistics of file
fs.stat(fileName, function(error,stats) {
  
  // Open the file for the purpose of reading
  fs.open(fileName, "r", function(error,fd) {

    // Define a buffer the size of data in file
    var buf = new Buffer(stats.size);

    // Read the file and place data in buffer 
    fs.read(fd, buf, 0, buf.length, null, function(error, bytesRead, buf) {
      
      // Get, then respond with the data (aka buffer)
      app.get('/', function(request,response) {
        var data = buf.toString("utf-8", 0, buf.length);
        response.send(data);
      });

      // Define the port and log communication 
      var port = process.env.PORT || 5000;
      app.listen(port,function() {
        console.log("Listening on " + port);
      });

      // Close the file
      fs.close(fd);
    });
  });
});
