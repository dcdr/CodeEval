var o = require("./subsequences");

describe("suite", function() {
	it("subsequence bag appears in babgbag 5 times", function() {
		expect(o.subsequence('bag', 'babgbag')).toBe(5);
	});
	it("subsequence rabbit appears in rabbbit 3 times", function() {
		expect(o.subsequence('rabbit', 'rabbbit')).toBe(3);
	});
	it("subsequence bag appears in bag 1 times", function() {
		expect(o.subsequence('bag', 'bag')).toBe(1);
	});
	it("subsequence bag appears in bal 0 times", function() {
		expect(o.subsequence('bag', 'bal')).toBe(0);
	});
	it("subsequence short appears in long 0 times", function() {
		expect(o.subsequence('short', 'long')).toBe(0);
	});
	it("subsequence aa appears in aaaa 6 times", function() {
		expect(o.subsequence('aa', 'aaaa')).toBe(6);
	});
});

