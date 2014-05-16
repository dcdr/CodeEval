var app = require("../javascript/app");

describe("minesweeper", function() {
	it("one mine", function() {
		var minefield = app.readfield('1,1;*');
		app.findmines(minefield);
		expect(app.printfield(minefield)).toBe('*');
	});
	it("one space", function() {
		var minefield = app.readfield('1,1;.');
		app.findmines(minefield);
		expect(app.printfield(minefield)).toBe('0');
	});
	it("one mine in 2,1", function() {
		var minefield = app.readfield('2,1;*.');
		app.findmines(minefield);
		expect(app.printfield(minefield)).toBe('*1');
	});
	it("one mine in 1,2", function() {
		var minefield = app.readfield('1,2;*.');
		app.findmines(minefield);
		expect(app.printfield(minefield)).toBe('*1');
	});
	it("three mines in 2,2", function() {
		var minefield = app.readfield('2,2;**.*');
		app.findmines(minefield);
		expect(app.printfield(minefield)).toBe('**3*');
	});
	it("three mines in 3,4", function() {
		var minefield = app.readfield('3,4;**.*........');
		app.findmines(minefield);
		expect(app.printfield(minefield)).toBe('**2*22210000');
	});
});
