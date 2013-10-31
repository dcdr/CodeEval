var fs = require('fs');

// All of this to avoid octals
var noOctalsEval = function(expr) {
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

var UglyExpressions = function() {
};

UglyExpressions.prototype.isUgly = function(candidate) {
	var primes = [2, 3, 5, 7];

	for(var i in primes) {
		if (0 === candidate % primes[i]) return true;
	}
	return false;
};

UglyExpressions.prototype.makeExpressions = function(num) {
	var expressions = [];
	var asArray = num.split('');
	var expr = asArray.join('+');
	while (true) {
		expressions.push(expr);
		var lastPlus = expr.lastIndexOf('+');
		var lastMinus = expr.lastIndexOf('-');

		// Quit when no '+' or '-' is present.
		if (lastPlus == lastMinus) break;

		// If rightmost op is '+', change to '-'.
		if (lastPlus > lastMinus) {
			expr = expr.substr(0, lastPlus) + '-' + expr.substr(lastPlus+1).split('').join('+');
			continue;
		}

		// Rightmost op is '-'. Remove op and restart right side expression.
		expr = expr.substr(0, lastMinus) + expr.substr(lastMinus+1).split('').join('+');
	}

	return expressions;
};

if (require.main === module) {
	fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		var ugly = new UglyExpressions();
		var expressions = ugly.makeExpressions(test.trim());
		var count = 0;
		expressions.forEach(function(expression) {
			if (ugly.isUgly(noOctalsEval(expression))) {
				count++;
			}
		});
		console.log(count);
	});
} else {
	exports.UglyExpressions = UglyExpressions;
}

