var fs = require('fs');


var pack = function(wire, spacing, bats) {
	bats.push(0);
	var curPos = 6,
	    lastPos = wire - 6;
	var newBats = 0;
	var existingBatPos = bats.shift();
	while (curPos <= lastPos) {
		// if there's space before the next bat on the wire
		if (0 === existingBatPos || curPos + spacing <= existingBatPos) {
			newBats++;
		}
		else {
			curPos = existingBatPos;
			existingBatPos = bats.shift();
		}
		// next possible position for a bat
		curPos += spacing;
	}
	return newBats;
};

if (require.main === module) {
	fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		var params = test.split(' ').map(function(i) { return parseInt(i);});
		var wire = params.shift();
		var spacing = params.shift();
		var count = params.shift();
		var bats = params.sort(function(a,b) { return a-b;});
		console.log(pack(wire, spacing, bats));
	});
} else {
	exports.pack = pack;
}


