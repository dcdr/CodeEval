var fs = require('fs');

var build = function(pairs) {
	var chain = {};
	pairs.forEach(function(pair) {
		var els = pair.split('-');
		if (chain.hasOwnProperty(els[0]) || 2 !== els.length) {
			return null;
		}
		chain[els[0]] = els[1];
	});

	return chain;	
}

var testChain = function(chain) {
	var mirror = {};
	var current = 'BEGIN';
	while (current !== 'END') {
		// check for repeats
		if (mirror.hasOwnProperty(current) || !chain.hasOwnProperty(current)) {
			return 'BAD';
		}
		mirror[current] = chain[current];
		current = chain[current];
	}
	if (Object.keys(mirror).length != Object.keys(chain).length) {
		return 'BAD'
	}

	return 'GOOD';
};

if (require.main === module) {
	fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		var pairs = test.split(';');
		var chain = build(pairs);
		if (chain !== null) {
			console.log(testChain(chain));
		}
		else {
			console.log('BAD');
		}
	});
} else {
	exports.build = build;
	exports.testChain = testChain;
}


