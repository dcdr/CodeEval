var fs = require('fs');

var tests = fs.readFileSync(process.argv[2]).toString().split('\n');

tests.forEach(function(test) {
	var params = test.split(' ');
	if (params.length !=3) return;

	var results = [];
	var A = parseInt(params[0], 10);
	var B = parseInt(params[1], 10);
	var N = parseInt(params[2], 10) + 1;

	for(var i=1; i<N; i++){
		if (0 === i % A && 0 === i % B) {
			results.push('FB');
		}
		else if (0 === i % B) {
			results.push('B');
		}
		else if (0 === i % A) {
			results.push('F');
		}
		else {
			results.push(i);
		}
	}

	console.log(results.join(' '));
});
