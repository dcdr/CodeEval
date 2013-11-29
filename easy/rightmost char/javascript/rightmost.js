/*
	You are given a string 'S' and a character 't'. Print out the position of 
	the rightmost occurrence of 't' (case matters) in 'S' or -1 if there is none. 
	The position to be printed out is zero based.
*/
var fs = require('fs');

var tests = fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(line) {
	return "" !== line;
}).forEach(function(line) {
	var data = line.split(',');
	var word = data[0];
	var character = data[1];

	// Perhaps this is cheating.
	console.log(word.lastIndexOf(character));
});