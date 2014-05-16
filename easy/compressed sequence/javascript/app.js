var fs = require('fs');

var compress = function(input) {
	var output = "";
	var sequence = input.split(' ');
	var count = 1;
	var number = sequence.shift();
	var length = sequence.length;
	while (0 < length--) {
		var next = sequence.shift();
		if (number === next) {
			count++;
		}
		else {
			output += count + " " + number + " ";
			count = 1;
			number = next;
		}
	}
	output += count + " " + number;

	return output;
};

if (require.main === module) {
	fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		console.log(compress(test));
	});
} else {
	exports.compress = compress;
}


