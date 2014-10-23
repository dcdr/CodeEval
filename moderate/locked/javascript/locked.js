var fs = require('fs');

var lock = function(numRooms, rumIters) {
	// initialize the rooms to open (0)
	var rooms = [];
	for(var i=0; i<numRooms; i++) { 
		rooms.push(0); 
	}

	// iterate numIters-1 times
	for(var i=1; i<rumIters; i++) {
		for(var j=0; j<numRooms; j++) {
			// lock (1) every second door
			if (1 === j%2) {
				rooms[j] = 1;
			}
			// flip the lock on every third door
			if (2 === j%3) {
				rooms[j] = rooms[j] ? 0 : 1;
			}
		}
	}

	// flip the lock on the last door
	rooms[numRooms-1] = rooms[numRooms-1] ? 0 : 1

	// return the count of locked doors
	return rooms.reduce(function(prevresult, cur) {
		return cur ? prevresult : prevresult+1;
	},0);
};

if (require.main === module) {
	fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		var params = test.split(' ').map(function(i) { return parseInt(i);});
		var numRooms = params[0];
		var rumIters = params[1];
		var lockedRooms = lock(numRooms, rumIters);
		console.log(lockedRooms);
	});
} else {
	exports.lock = lock;
}


