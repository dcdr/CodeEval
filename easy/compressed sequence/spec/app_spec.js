var app = require("../javascript/app");

describe("compress sequence", function() {
	it("one number", function() {
		expect(app.compress("10")).toBe("1 10");
	});
	it("repeat one number", function() {
		expect(app.compress("10 10 10")).toBe("3 10");
	});
	it("three unique numbers", function() {
		expect(app.compress("10 11 12")).toBe("1 10 1 11 1 12");
	});
	it("longish sequence with repeats", function() {
		expect(app.compress("10 11 11 12 12 12 1 1 0 0 0 0 0 0 5 6 6 6 6")).toBe("1 10 2 11 3 12 2 1 6 0 1 5 4 6");
	});
});
