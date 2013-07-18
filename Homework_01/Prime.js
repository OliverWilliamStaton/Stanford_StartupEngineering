#!/usr/bin/env node
// Initialize variables
var fs = require('fs');
var outfile = "prime.txt";
var out = [];
var testValue = 2;
var counter = 0;
var arrayLength = 100;
var flag = 0;

//Continue to look until 100 primes are found
while(counter < arrayLength)
{
  // Always prepare a clean flag
  flag = 0;

  // Divide by all #s between 2..n, if divisible nonprime
  for(var i=2 ; i<testValue; i++)
  {
    if(testValue%i === 0)
    {
      // Mark as nonprime
      flag = 1
    }
  }

  // If prime, push to array and increment #s found
  if(flag === 0)
  {
    out.push(testValue);
    counter++;
  }

  // Increment value to check next value
  testValue++;
}

// Write to a file & print to the console
fs.writeFileSync(outfile, out.join());
console.log("\nPrime #s: " + out + "\n\n" + "Size: " + counter + "\n\n");
