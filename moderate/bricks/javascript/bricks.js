var fs = require('fs');

var makeBricks = function(list) {
	var bricks = {};
	for(var i in list) {
		var parts = list[i].slice(1,-1).split(' ');
		bricks[parts[0]] = [eval(parts[1]), eval(parts[2])];
	}
	return bricks;
}

var brickOrientations = function(brick) {
	orientations = [];
	orientations.push([Math.abs(brick[0][0]-brick[1][0]),Math.abs(brick[0][1]-brick[1][1])]);
	orientations.push([Math.abs(brick[0][1]-brick[1][1]),Math.abs(brick[0][0]-brick[1][0])]);
	orientations.push([Math.abs(brick[0][1]-brick[1][1]),Math.abs(brick[0][2]-brick[1][2])]);
	orientations.push([Math.abs(brick[0][2]-brick[1][2]),Math.abs(brick[0][1]-brick[1][1])]);
	orientations.push([Math.abs(brick[0][0]-brick[1][0]),Math.abs(brick[0][2]-brick[1][2])]);
	orientations.push([Math.abs(brick[0][2]-brick[1][2]),Math.abs(brick[0][0]-brick[1][0])]);
	return orientations;
}

var findBricksThatFit = function(hole, bricks) {
	var matches = [];
	var hole_w = Math.abs(hole[0][0] - hole[1][0]);
	var hole_h = Math.abs(hole[0][1] - hole[1][1]);
	for(var i in bricks) {
		var orientations = brickOrientations(bricks[i]);
		for(var j in orientations) {
			if (hole_w >= orientations[j][0] && hole_h >= orientations[j][1]) {
				matches.push(i);
				break;
			}
		}
	}
	return matches;
}

if (require.main === module) {
	fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		var params = test.split('|');//.map(function(i) { return parseInt(i);});
		var coords = params[0].split(' ');
		var hole = [eval(coords[0]), eval(coords[1])];
		var bricks = makeBricks(params[1].split(';'));
		var matches = findBricksThatFit(hole, bricks);
		console.log(matches.join(',')||'-');
	});
} else {
	exports.makeBricks = makeBricks;
	exports.findBricksThatFit = findBricksThatFit;
}


