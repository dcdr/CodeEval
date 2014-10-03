var t = require("./trailing");

describe("suite", function() {
	it("World trails 'Hello, World'", function() {
		expect(t.isTrailingString('Hello, World', 'World')).toBe(1);
	});
	it("World does not trail 'rld'", function() {
		expect(t.isTrailingString('rld', 'World')).toBe(0);
	});
	it("World does not trail 'Hellow, Meridian'", function() {
		expect(t.isTrailingString('Hello, Meridian', 'World')).toBe(0);
	});
});
