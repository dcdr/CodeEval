var fs = require('fs');

// All of this to avoid octals
var noOctalsEval = function(expr) {
	// var expr = stack.join('');
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

	// console.log(expr);
	// var a = expr.split('+');
	// var an = [];
	// a.forEach(function(add) {
	// 	var s = add.split('-');
	// 	var sn = [];
	// 	s.forEach(function(num) {
	// 		sn.push(parseInt(num,10));
	// 	});
	// 	an.push(sn.join('-'));
	// });
	// expr = an.join('+');
	// console.log(expr);

	return expr;
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
	var s = num.split('');
	var first = s.shift();
	var expr = function(left, right) {
		if (0 === right.length) {
			expressions.push(left.join(''));
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
	expr([first], s);

	return expressions;
};

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
