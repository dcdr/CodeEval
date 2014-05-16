var fs = require('fs');

var readfield = function(field) {
	var options = field.split(';');
	var dimensions = options[0].split(',');
	var rows = dimensions[0];
	var cols = dimensions[1];
	var mines = options[1];
	var minefield = new Array();
	var i=0;
	for (var r = 0; r < rows; r++) {
		var row = new Array();
		minefield.push(row);
		for (var c = 0; c < cols; c++) {
			row.push('*' === mines[i++] ? '*' : 0);
		}
	}
	return minefield;
}

var printfield = function(minefield) {
	var rows = minefield.length;
	var cols = minefield[0].length;
	var solution="";
	for (var r = 0; r < rows; r++) {
		for (var c = 0; c < cols; c++) {
			solution += minefield[r][c];
		}
	}
	return solution;	
}

var findmines = function(minefield) {
	var rows = minefield.length;
	var cols = minefield[0].length;

	if (0 === rows || 0 === cols) {
		// invalid minefield
		return;
	}

	if (1 == cols) {
		if (1 == rows) {
			// nothing more to process
			return;
		}
		else { // 1 column, may rows
			// top item
			if (0 == minefield[0][0]) {
				if ('*' === minefield[1][0]) {
					minefield[0][0]++;
				}
			}
			// bottom item
			var r = rows-1;
			if (0 == minefield[r][0]){
				if ('*' === minefield[r-1][0]) {
					minefield[r][0]++;
				}
			}
			//remainder of colunn
			while(0 < --r) {
				if (0 == minefield[r][0]){
					if ('*' === minefield[r-1][0]) {
						minefield[r][0]++;
					}
					if ('*' === minefield[r+1][0]) {
						minefield[r][0]++;
					}
				}
			}
		}
		return;
	}

	// many columns
	if (1 == rows) {
		// 1 row, many columns
		// leftmost item
		if (0 == minefield[0][0]) {
			if ('*' === minefield[0][1]) {
				minefield[0][0]++;
			}
		}
		// rightmost item
		var c = cols-1;
		if (0 == minefield[0][c]) {
			if ('*' === minefield[0][c-1]) {
				minefield[0][c]++;
			}
		}
		//remainder of row
		while(0 < --c) {
			if (0 == minefield[0][c]) {
				if ('*' === minefield[0][c]) {
					minefield[0][c]++;
				}
				if ('*' === minefield[0][c]) {
					minefield[0][c]++;
				}
			}
		}
		return;
	}

	// two or more rows and columns

	// top, left corner
	if ('*' != minefield[0][0]) {
		if ('*' === minefield[0][1]) {
			minefield[0][0]++;
		}
		if ('*' === minefield[1][1]) {
			minefield[0][0]++;
		}
		if ('*' === minefield[1][0]) {
			minefield[0][0]++;
		}
	}

	// top, right corner
	var c = cols-1;
	if ('*' != minefield[0][c]) {
		if ('*' === minefield[0][c-1]) {
			minefield[0][c]++;
		}
		if ('*' === minefield[1][c-1]) {
			minefield[0][c]++;
		}
		if ('*' === minefield[1][c]) {
			minefield[0][c]++;
		}
	}

	// remainder of the top line
	while (0 < --c) {
		if ('*' != minefield[0][c]) {
			if ('*' === minefield[0][c-1]) {
				minefield[0][c]++;
			}
			if ('*' === minefield[1][c-1]) {
				minefield[0][c]++;
			}
			if ('*' === minefield[1][c]) {
				minefield[0][c]++;
			}
			if ('*' === minefield[1][c+1]) {
				minefield[0][c]++;
			}
			if ('*' === minefield[0][c+1]) {
				minefield[0][c]++;
			}
		}	
	}

	// bottom, left corner
	var r = rows - 1;
	if ('*' != minefield[r][0]) {
		if ('*' === minefield[r][1]) {
			minefield[r][0]++;
		}
		if ('*' === minefield[r-1][1]) {
			minefield[r][0]++;
		}
		if ('*' === minefield[r-1][0]) {
			minefield[r][0]++;
		}
	}

	// bottom, right corner
	c = cols-1;
	if ('*' != minefield[r][c]) {
		if ('*' === minefield[r][c-1]) {
			minefield[r][c]++;
		}
		if ('*' === minefield[r-1][c-1]) {
			minefield[r][c]++;
		}
		if ('*' === minefield[r-1][c]) {
			minefield[r][c]++;
		}
	}

	// remainder of the bottom line
	while (0 < --c) {
		if ('*' != minefield[r][c]) {
			if ('*' === minefield[r][c-1]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r-1][c-1]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r-1][c]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r-1][c+1]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r][c+1]) {
				minefield[r][c]++;
			}
		}	
	}

	// remainder of the leftmost column
	r = rows-1;
	c = 0;
	while (0 < --r) {
		if ('*' != minefield[r][c]) {
			if ('*' === minefield[r-1][c]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r-1][c+1]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r][c+1]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r+1][c+1]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r+1][c]) {
				minefield[r][c]++;
			}
		}	
	}

	// remainder of the rightmost column
	r = rows-1;
	c = cols-1;
	while (0 < --r) {
		if ('*' != minefield[r][c]) {
			if ('*' === minefield[r-1][c]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r-1][c-1]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r][c-1]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r+1][c-1]) {
				minefield[r][c]++;
			}
			if ('*' === minefield[r+1][c]) {
				minefield[r][c]++;
			}
		}	
	}

	// remainder of minefield
	for (r = rows-2; 0 < r; r--) {
		for (c = cols-2; 0 < c; c--) {
			if ('*' != minefield[r][c]) {
				if ('*' === minefield[r-1][c]) {
					minefield[r][c]++;
				}
				if ('*' === minefield[r-1][c-1]) {
					minefield[r][c]++;
				}
				if ('*' === minefield[r][c-1]) {
					minefield[r][c]++;
				}
				if ('*' === minefield[r+1][c-1]) {
					minefield[r][c]++;
				}
				if ('*' === minefield[r+1][c]) {
					minefield[r][c]++;
				}
				if ('*' === minefield[r+1][c+1]) {
					minefield[r][c]++;
				}
				if ('*' === minefield[r][c+1]) {
					minefield[r][c]++;
				}
				if ('*' === minefield[r-1][c+1]) {
					minefield[r][c]++;
				}
			}	
		}
	}
}

if (require.main === module) {
	var lines = fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		var minefield = readfield(test);
		findmines(minefield);
		console.log(printfield(minefield));
	});
} else {
	exports.findmines = findmines;
	exports.printfield = printfield;
	exports.readfield = readfield;
}
