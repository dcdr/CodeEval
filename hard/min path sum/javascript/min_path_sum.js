var fs = require('fs');

var minPathSum = function(data) {
	var size = data.length;
	// Do last row
	var row = size-1;
	var col = size-1;
	while(-1 < --col) {
		data[row][col] += data[row][col+1];
	}
	// Do last column
	var row = size-1;
	var col = size-1;
	while(-1 < --row) {
		data[row][col] += data[row+1][col];
	}
	// Do remaining items
	var row = size-1;
	while(-1 < --row) {
		var col = size-1;
		while (-1 < --col) {
			right = data[row][col] + data[row][col+1];
			down = data[row][col] + data[row+1][col];
			data[row][col] = right < down ? right : down;
		}
	}
	return data[0][0];
}

if (require.main === module) {
	var lines = fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	});
	var last_line = lines.length;
	var current_line = 0;
	while (current_line < last_line) {
		var size = parseInt(lines[current_line++]);
		var data = new Array();
		while (0 < size--) {
			data.push(lines[current_line++].split(',').map(function(item) { return parseInt(item, 10); }));
		}
		console.log(minPathSum(data));
	}
} else {
	exports.minPathSum = minPathSum;
}


