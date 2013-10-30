var fs = require('fs');

var results = 0;
var primes = [2, 3, 5, 7];

var isUgly = function(candidate) {
	for(var i in primes) {
		if (0 === candidate % primes[i]) return true;
	}
	return false;
};

var reportIfUgly = function(num) {
	if (isUgly(num)) {
		results++;
	}
};

// All of this to avoid octals
var eval1 = function(stack) {
	var expr = stack.join('');
	var regex = /\d+/;
	var match = regex.exec(expr);
	var sum = 0;
	var len;
	var addend;
	var op = null;
	while (match) {
		len = match[0].length;
		addend = parseInt(match[0], 10);
		sum = '+' === op ? sum + addend : '-' === op ? sum - addend : addend;
		op = expr[len];
		expr = expr.substr(len+1);
		match = regex.exec(expr);
	}

	return sum;
};

var expr = function(left, right) {
	if (0 === right.length) {
		reportIfUgly(eval1(left));
		return;
	}

	var m = right.shift();
	left.push('+',m);
	expr(left.slice(0), right.slice(0));
	left.splice(left.length-2, 1, '-');
	expr(left.slice(0), right.slice(0));
	left.splice(left.length-2, 1);
	expr(left.slice(0), right.slice(0));
};

var findUglyExpressions = function(num) {
	results = 0;
	var s = num.split('');
	var first = s.shift();
	expr([first], s);

	console.log(results);
};

var tests = fs.readFileSync(process.argv[2]).toString().split('\n');
tests.forEach(function(test) {
	if ("" !== test) {
		findUglyExpressions(test.trim());
	}
});
