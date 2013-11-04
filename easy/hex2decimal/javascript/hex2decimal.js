var fs = require('fs');


var hexToDecimal = function(hex) {
	var sum = 0;
	var count = hex.length;
	for (var i=0; i<count; i++) {
		sum *= 16;
		var digit = hex[i] - '0';
		if (digit>9) {
			digit = digit + '0' - 'a' + 10;
		}
		sum += digit;
	}

	return sum;
};

var map = {
	'0': 0,
	'1': 1,
	'2': 2,
	'3': 3,
	'4': 4,
	'5': 5,
	'6': 6,
	'7': 7,
	'8': 8,
	'9': 9,
	'a': 10,
	'b': 11,
	'c': 12,
	'd': 13,
	'e': 14,
	'f': 15
};

fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
	return "" !== test;
}).forEach(function(test) {
	console.log(parseInt(test, 16));
	// console.log(hexToDecimal(test));
});