/*
	A happy number is defined by the following process. Starting with any 
	positive integer, replace the number by the sum of the squares of its 
	digits, and repeat the process until the number equals 1 (where it will 
	stay), or it loops endlessly in a cycle which does not include 1. 
	Those numbers for which this process ends in 1 are happy numbers, while 
	those that do not end in 1 are unhappy numbers.
*/

var fs = require('fs');

// Read each line as a test, skipping empty lines.
var tests = fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(line) {
	return "" !== line;
}).
// For each test
forEach(function(line) {
	var number = parseInt(line, 10);		// Get the test number.
	var numbers = [];						// Intermediate results storage.

	// Loop indefinitely
	while (true) {
		// If 1, then we found a happy number.
		if (1 === number) {
			// Oupput positive result.
			console.log("1");
			// Exit loop.
			break;
		}
		// Check if there is a repeat.
		if (-1 != numbers.indexOf(number)) {
			// Output negative result.
			console.log("0");
			// Exit loop.
			break;
		}
		// Save the intermediate result.
		numbers.push(number);

		// Calculate the next number.
		var n = number;
		number = 0;
		while (0 < n) {
			var ones = n % 10;
			number += ones * ones;
			n = (n-ones) / 10;
		}
	}
});