var o = require("./bats");

describe("suite", function() {
	// it("can pack 1 new bat on a wire 12 long with spacing 2 and 0 current bats", function() {
	// 	expect(o.pack(12,2,[])).toBe(1);
	// });
	// it("can pack 2 new bats on a wire 14 long with spacing 2 and 0 current bats", function() {
	// 	expect(o.pack(14,2,[])).toBe(2);
	// });
	// it("can pack 0 new bats on a wire 14 long with spacing 2 and current bats at 13", function() {
	// 	expect(o.pack(14,2,[7])).toBe(0);
	// });
	// it("can pack 0 new bats on a wire 14 long with spacing 2 and current bats at 13", function() {
	// 	expect(o.pack(22, 2, [9, 11])).toBe(3);
	// });
	// it("can pack 5 new bats on a wire 33 long with spacing 5 and no current bats", function() {
	// 	expect(o.pack(33, 5, [])).toBe(5);
	// });
	// it("can pack 0 new bats on a wire 16 long with spacing 3 and current bats at 6, 10", function() {
	// 	expect(o.pack(16, 3, [6, 10])).toBe(0);
	// });
	it("can pack 5 new bats on a wire 835 long with spacing 125 and current bats at 113", function() {
		expect(o.pack(835, 125, [113])).toBe(5);
	});
	// it("can pack 8 new bats on a wire 47 long with spacing 5 and no current bats", function() {
	// 	expect(o.pack(47, 5, [])).toBe(8);
	// });
});

