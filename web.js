var fs = require('fs');

fs.readFile("index.html", function (err, data) {
  if (err) {
    throw err;
  }
  var buf = new Buffer(data);
  console.log(buf.toString());
});
