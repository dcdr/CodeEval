var o = require("./overlapping");

describe("suite", function() {
	it("R1 encompasses R2", function() {
		expect(o.isOverlapping([0,4,6,0], [1,3,5,1])).toBe(true);
	});
	it("R1 encompass by R2", function() {
		expect(o.isOverlapping([1,3,5,1], [0,4,6,0])).toBe(true);
	});
	it("R1 top left vertex intersects R2 bottom right vertex", function() {
		expect(o.isOverlapping([0,0,2,-2], [-2,2,0,0])).toBe(true);
	});
	it("R1 bottom left vertex intersects R2 top right vertex", function() {
		expect(o.isOverlapping([0,2,2,0], [-2,0,0,-2])).toBe(true);
	});
	it("R1 top right vertex intersects R2 bottom left vertex", function() {
		expect(o.isOverlapping([-2,0,0,-2], [0,2,2,0])).toBe(true);
	});
	it("R1 bottom right vertex intersects R2 top left vertex", function() {
		expect(o.isOverlapping([-2,2,0,0], [0,0,2,-2])).toBe(true);
	});
	it("R1 bottom left intersects R2 top right", function() {
		expect(o.isOverlapping([-1,1,2,-1], [-3,0,0,-2])).toBe(true);
	});
	it("R1 top right intersects R2 bottom left", function() {
		expect(o.isOverlapping([-2,1,1,-1],[0,2,2,0])).toBe(true);
	});
	it("R1 bottom right intersects R2 top left", function() {
		expect(o.isOverlapping([-3,2,0,0], [-1,1,2,-1])).toBe(true);
	});
	it("R1 intersects right edge of R2 shared bottom vertex", function() {
		expect(o.isOverlapping([1,1,3,-1], [-2,0,1,-1])).toBe(true);
	});
	it("R1 intersect bottom edge of R2 shared left vertex", function() {
		expect(o.isOverlapping([0,0,3,-1], [0,2,2,0])).toBe(true);
	});
	it("R1 intersect left edge R2 shared top vertex", function() {
		expect(o.isOverlapping([-3,2,0,-1], [0,2,2,0])).toBe(true);
	});
	it("R1 intersects top edge R2 shared right vertex", function() {
		expect(o.isOverlapping([-3,3,-1,1], [-2,1,-1,-2])).toBe(true);
	});
	it("R1 completely intersects R2", function() {
		expect(o.isOverlapping([-3,3,-1,1], [-3,3,-1,1])).toBe(true);
	});
	it("R1 above and left R2", function() {
		expect(o.isOverlapping([-3,3,-1,1], [1,-1,3,-3])).toBe(false);
	});
	it("R1 above R2", function() {
		expect(o.isOverlapping([-3,-1,-1,-3], [1,3,3,1])).toBe(false);
	});
	it("R1 above and right of R2", function() {
		expect(o.isOverlapping([1,3,3,1], [-3,-1,-1,-3])).toBe(false);
	});
	it("R1 right of R2", function() {
		expect(o.isOverlapping([1,3,3,1], [-3,3,-1,1])).toBe(false);
	});
	it("R1 left of R2", function() {
		expect(o.isOverlapping([-3,3,-1,1], [1,3,3,1])).toBe(false);
	});
	it("R1 above and right of R2", function() {
		expect(o.isOverlapping([1,3,3,1], [-3,-1,-1,-3])).toBe(false);
	});
	it("R1 above R2", function() {
		expect(o.isOverlapping([1,3,3,1],[1,-1,3,-3])).toBe(false);
	});
	it("R1 above and left of R2", function() {
		expect(o.isOverlapping([-3,3,-1,1], [1,-1,3,-3])).toBe(false);
	});
});
