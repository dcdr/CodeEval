var mps = require("../javascript/min_path_sum");

describe("min path sum", function() {
	it("size 1", function() {
		var maze = new Array();
		var data = new Array();
		data.push(6);
		maze.push(data);
		expect(mps.minPathSum(maze)).toBe(6);
	});
	it("size 2 start right", function() {
		var maze = new Array();
		maze.push(new Array(1,2));
		maze.push(new Array(3,4));
		expect(mps.minPathSum(maze)).toBe(7);
	});
	it("size 2 start down", function() {
		var maze = new Array();
		maze.push(new Array(1,3));
		maze.push(new Array(2,4));
		expect(mps.minPathSum(maze)).toBe(7);
	});
	it("size 4 move right", function() {
		var maze = new Array();
		maze.push(new Array(1,2,3,4));
		maze.push(new Array(5,6,7,8));
		maze.push(new Array(9,10,11,12));
		maze.push(new Array(13,14,15,16));
		expect(mps.minPathSum(maze)).toBe(46);
	});
	it("size 4 move middle", function() {
		var maze = new Array();
		maze.push(new Array(1,2,12,16));
		maze.push(new Array(11,3,4,8));
		maze.push(new Array(9,10,5,6));
		maze.push(new Array(13,14,15,7));
		expect(mps.minPathSum(maze)).toBe(28);
	});
});
