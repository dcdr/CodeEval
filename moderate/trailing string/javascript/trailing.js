var fs = require('fs');

var isTrailingString = function(source, test) {
	var length = test.length;
	if (source.length >= length) {
		if (source.substr(-length) == test) {
			return 1;
		}
	}
	return 0;
}

if (require.main === module) {
	fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		var params = test.split(',');
		console.log(isTrailingString(params[0], params[1]));
	});
} else {
	exports.isTrailingString = isTrailingString;
}


