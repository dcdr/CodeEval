var p = require("../javascript/palindrome");

describe("suite", function() {
	it("1 is a palindrome", function() {
		expect(p.isPalindrome(1)).toBe(true);
	});
	it("11 is a palindrome", function() {
		expect(p.isPalindrome(11)).toBe(true);
	});
	it("12 is not a palindrome", function() {
		expect(p.isPalindrome(12)).toBe(false);
	});
	it("111 is a palindrome", function() {
		expect(p.isPalindrome(111)).toBe(true);
	});
	it("121 is a palindrome", function() {
		expect(p.isPalindrome(121)).toBe(true);
	});
	it("1221 is a palindrome", function() {
		expect(p.isPalindrome(1221)).toBe(true);
	});
	it("1121 is a palindrome", function() {
		expect(p.isPalindrome(1121)).toBe(false);
	});
	it("ranges(1,1)", function() {
		expect(p.ranges(1,1)).toEqual([[1]]);
	});
	it("ranges(1,2)", function() {
		expect(p.ranges(1,2)).toEqual([[1], [1,2], [2]]);
	});
	it("ranges(1,3)", function() {
		expect(p.ranges(1,3)).toEqual([[1], [1,2], [1,2,3], [2], [2,3], [3]]);
	});
	it("isInteresting([1]), not", function() {
		expect(p.isInteresting([1])).toBe(false);
	});
	it("isInteresting([1,2])", function() {
		expect(p.isInteresting([1,2])).toBe(true);
	});
	it("isInteresting([1,2,3])", function() {
		expect(p.isInteresting([1,2,3])).toBe(false);
	});
	it("isInteresting([12])", function() {
		expect(p.isInteresting([12])).toBe(true);
	});
	it("isInteresting([11,12])", function() {
		expect(p.isInteresting([11,12])).toBe(false);
	});
	it("numInteresting(1,2) is 1"), function() {
		expect(p.numInteresting(1,2)).toBe(1);
	};
	it("numInteresting(1,3) is 2"), function() {
		expect(p.numInteresting(1,3)).toBe(3);
	};
	it("numInteresting(1,7) is 12"), function() {
		expect(p.numInteresting(1,7)).toBe(12);
	};
});
