var fs = require('fs');

var numInteresting = function(first, last) {
	var count = 0;
	ranges(first, last).forEach(function(range) {
		if (isInteresting(range)) {
			count++;
		}
	});
	return count;
};

var isInteresting = function(range) {
	var count = 0;
	range.forEach(function(number) {
		if (isPalindrome(number)) {
			count++;
		}
	});
	return 0 === count % 2;
};

var ranges = function(first, last) {
	var result = [];
	while (first <= last) {
		var i = j = first;
		while (j <= last) {
			var subrange = [];
			while (i<=j) {
				subrange.push(i++);
			}
			j++;
			i = first;
			result.push(subrange);
		}
		first++;
	}
	return result;
};

var isPalindrome = function(str) {
	if (typeof str === "number") {
		str = str.toString();
	}
	var right = str.length-1;
	var left = 0;
	while (left<right) {
		if (str[left] != str[right]) {
			return false;
		}
		left++; right--;
	}
	return true;
};

if (require.main === module) {
	fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		var numbers = test.split(' ');
		var first = parseInt(numbers[0], 10);
		var last = parseInt(numbers[1], 10);
		console.log(numInteresting(first, last));
	});
} else {
	exports.numInteresting = numInteresting;
	exports.isInteresting = isInteresting;
	exports.isPalindrome = isPalindrome;
	exports.ranges = ranges;
}


