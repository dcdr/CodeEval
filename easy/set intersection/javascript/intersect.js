/*
	You are given two sorted list of numbers (ascending order). The lists themselves 
	are comma delimited and the two lists are semicolon delimited. Print out the 
	intersection of these two sets.
*/

var fs = require('fs');

// Read all tests, one test per line, skipping empty lines.
var tests = fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(line) {
	return "" !== line;
}).
// For each test
forEach(function(test) {
	var data = test.split(';');		// Find both sets.
	var seta = data[0].split(',');	// Find all elements in set a.
	var seta_length = seta.length;	// Find the size of set a.
	var setb = data[1].split(',');	// Find all elements in set b.
	var setb_length = setb.length;	// Find the size of set b.
	var intersection = [];			// The resulting intersection of sets a and b.

	var a=0, b=0;					// Indices into sets a and b.
	var A = parseInt(seta[a], 10);	// Get the next element in a.
	var B = parseInt(setb[b], 10);	// Get the next element in b.

	while (a<seta_length && b<setb_length) {	// Iterate until one set is exhausted.
		// If elements are equal, ...
		if (A == B) {
			intersection.push(A);				// record the element.
			A = parseInt(seta[++a], 10);		// Get the next element in a.
			B = parseInt(setb[++b], 10);		// Get the next element in b.
		}
		// If A is smaller than B, ...
		else if (A < B) {
			A = parseInt(seta[++a], 10);		// get the next element in a.
		}
		// If B is smaller than A, ...
		else {
			B = parseInt(setb[++b], 10);		// get the next element in b.
		}
	}

	console.log(intersection.join());
});