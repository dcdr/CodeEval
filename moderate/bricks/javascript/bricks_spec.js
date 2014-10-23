var o = require("./bricks");

describe("suite", function() {
	it("can pack 1 new bat on a wire 12 long with spacing 2 and 0 current bats", function() {
		expect(o.pack(12,2,[])).toBe(1);
	});
});

