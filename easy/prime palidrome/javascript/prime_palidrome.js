var primes = [ 2 ];
var test = 3;
var lastPrimePalidrome = 2;

var isKnownPrime = function(candidate) {
	for(var i in primes) {
		var prime = primes[i];
		if (0 === candidate % prime) return false;
	}
	primes.push(candidate);
	return true;
};

var isPalidrome = function(candidate) {
	var stringify = candidate.toString();
	var first = 0;
	var last = stringify.length - 1;
	while (first < last) {
		if (stringify[first] != stringify[last]) return false;
		first++;
		last--;
	}
	return true;
};

while (test < 1000) {
	if (isKnownPrime(test) && isPalidrome(test)) {
		lastPrimePalidrome = test;
	}

	test += 2;
}

console.log(lastPrimePalidrome);
