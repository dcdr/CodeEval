var p = require("../javascript/palindrome");

describe("suite", function() {
	it("1 is a palindrome", function() {
		expect(p.isPalindrome("1")).toBe(true);
	});
	it("11 is a palindrome", function() {
		expect(p.isPalindrome("11")).toBe(true);
	});
	it("12 is not a palindrome", function() {
		expect(p.isPalindrome("12")).toBe(false);
	});
	it("111 is a palindrome", function() {
		expect(p.isPalindrome("111")).toBe(true);
	});
	it("121 is a palindrome", function() {
		expect(p.isPalindrome("121")).toBe(true);
	});
	it("1221 is a palindrome", function() {
		expect(p.isPalindrome("1221")).toBe(true);
	});
	it("1121 is a palindrome", function() {
		expect(p.isPalindrome("1121")).toBe(false);
	});
	it("ranges(1,1)", function() {
		expect(p.ranges(1,1)).toBe([[1]]);
	});
	it("ranges(1,2)", function() {
		expect(p.ranges(1,2)).toBe([[1], [1,2], [2]]);
	});
});
