/*
	You are given a sorted list of numbers with duplicates. Print out the sorted list with 
	duplicates removed.
*/

var fs = require('fs');

// Get all tests, one per line, skipping empty lines.
var tests = fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(line) {
	return "" !== line;
}).forEach(function(test) {				// For each test.
	var orig = test.split(',');			// Find all elements in the set.
	var orig_len = orig.length;			// Find the size of the set.
	var uniq = [];						// Resulting unique elements.

	for(var i=0; i<orig.length; i++) {	// Iterate over all elements.
		uniq.push(orig[i]);				// Save the first occurrence of the element.
		while(orig[i] == orig[i+1]) {	// Skip the remaining occurrences of the element.
			i++;
		}
	}

	console.log(uniq.join());			// Output the resulting set of unique elements.
});