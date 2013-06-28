#!/usr/bin/env node
// Initialize variables
var fs = require ('fs');
var outfile = "hello.txt";
var out = "A startup is a business built to grow rapidly.\n";

// Write to a file & console
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);