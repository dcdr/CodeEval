var o = require("./locked");

describe("suite", function() {
	it("1 door iterating 1 time leaves 0 unlocked", function() {
		expect(o.lock(1,1)).toBe(0);
	});
	it("2 doors iterating 1 time leaves 1 unlocked", function() {
		expect(o.lock(2,1)).toBe(1);
	});
	it("20 doors iterating 1 time leaves 19 unlocked", function() {
		expect(o.lock(20,1)).toBe(19);
	});
	it("2 doors iterating 2 times leaves 2 unlocked", function() {
		expect(o.lock(2,2)).toBe(2);
	});
	it("3 doors iterating 2 times leaves 2 unlocked", function() {
		expect(o.lock(3,2)).toBe(2);
	});
	it("4 doors iterating 2 times leaves 2 unlocked", function() {
		expect(o.lock(4,2)).toBe(2);
	});
	it("2 doors iterating 3 times leaves 2 unlocked", function() {
		expect(o.lock(2,3)).toBe(2);
	});
	it("3 doors iterating 3 times leaves 1 unlocked", function() {
		expect(o.lock(3,3)).toBe(1);
	});
	it("4 doors iterating 3 times leaves 3 unlocked", function() {
		expect(o.lock(4,3)).toBe(3);
	});
	it("6 doors iterating 3 times leaves 3 unlocked", function() {
		expect(o.lock(6,3)).toBe(3);
	});
	it("7 doors iterating 3 times leaves 4 unlocked", function() {
		expect(o.lock(7,3)).toBe(4);
	});
	it("7 doors iterating 4 times leaves 3 unlocked", function() {
		expect(o.lock(7,4)).toBe(3);
	});
	it("1 door iterating 100 time leaves 0 unlocked", function() {
		expect(o.lock(1,100)).toBe(0);
	});
	it("2 doors iterating 100 times leaves 2 unlocked", function() {
		expect(o.lock(2,100)).toBe(2);
	});
	it("100 doors iterating 100 times leaves 50 unlocked", function() {
		expect(o.lock(100,100)).toBe(50);
	});
});
