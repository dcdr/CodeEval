var fs = require('fs');

var tests = fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(line) {
	return "" !== line;
}).forEach(function(line) {
	var args = line.split(',');
	var bounds = parseInt(args[0], 10);
	var increment = parseInt(args[1], 10);
	var sum = 0;

	while(bounds > sum) sum += increment;

	console.log(sum);
});