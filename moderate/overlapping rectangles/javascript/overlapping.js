var fs = require('fs');

var isOverlapping = function(r1x1,r1y1,r1x2,r1y2,r2x1,r2y1,r2x2,r2y2) {
	if (r2x2 < r1x1 || r2x1 > r1x2 || r2y1 < r1y2 || r2y2 > r1y1) return false;
	return true;
}

if (require.main === module) {
	fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		var c = test.split(',').map(function(val) { return parseInt(val);});;
		console.log(isOverlapping(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7]) ? "True" : "False");
	});
} else {
	exports.isOverlapping = isOverlapping;
}


