var fs = require('fs');

var subsequence = function(sub, string) {
	// console.log(sub,string);
	var record = [];
	var count = 0;
	var i = 0;
	var sub_length = sub.length;
	var string_length = string.length;
	var target = sub[0];

	while(true) {
		while(i < string_length) {
			if (target === string[i]) {
				// if the full sub is matched
				if (sub_length-1 === record.length) {
					count++;		// increment the count
				}
				// record this match and move ot the next character in sub 
				else {
					record.push([target, i]);
					target = sub[record.length];
				}
			}
			i++;				// try to match the next character
		}
		if (0 === record.length) {
			break;
		}
		// pop the last match in sub off the record
		var r = record.pop();
		// start looking for that char again
		target = r[0];
		i = r[1]+1;
	}

	return count;
};

if (require.main === module) {
	fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		var params = test.split(',');
		console.log(subsequence(params[1], params[0]));
	});
} else {
	exports.subsequence = subsequence;
}


