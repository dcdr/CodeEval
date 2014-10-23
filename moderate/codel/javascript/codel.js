var fs = require('fs');

var codex = {
	' ' : ' ',
	'\n' : '\n',
	'a' : 'y',
	'b' : 'h',
	'c' : 'e',
	'd' : 's', 
	'e' : 'o',
	'f' : 'c',
	'g' : 'v', //x
	'h' : 'x', //v
	'i' : 'd',
	'j' : 'u',
	'k' : 'i',
	'l' : 'g',
	'm' : 'l',
	'n' : 'b',
	'o' : 'k',
	'p' : 'r',
	'q' : 'z',
	'r' : 't',
	's' : 'n',
	't' : 'w',
	'u' : 'j', 
	'v' : 'p',
	'w' : 'f',
	'x' : 'm',
	'y' : 'a',
	'z' : 'q'
};

var codel = function(input) {
	var output = "";
	var n = 0, last = input.length;
	while(n < last) {
		output += codex[input[n++]];
	}
	return output;
};

if (require.main === module) {
	var input = fs.readFileSync(process.argv[2]).toString();
	console.log(codel(input));
} else {
	exports.codel = codel;
}


