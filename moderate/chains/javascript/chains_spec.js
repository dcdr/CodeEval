var o = require("./chains");

describe("suite", function() {
	// it("chain 4-2;BEGIN-3;3-4;2-END is GOOD", function() {
	// 	expect(o.testChain(o.build("4-2;BEGIN-3;3-4;2-END".split(';')))).toBe("GOOD");
	// });
	// it("chain 4-2;BEGIN-3;3-4;2-3 is BAD", function() {
	// 	expect(o.testChain(o.build("4-2;BEGIN-3;3-4;2-3".split(';')))).toBe("BAD");
	// });
	// it("chain 4-2;BEGIN-3;3-5;2-3 is BAD", function() {
	// 	expect(o.testChain(o.build("4-2;BEGIN-3;3-5;2-3".split(';')))).toBe("BAD");
	// });
	// it("chain BEGIN-BEGIN is BAD", function() {
	// 	expect(o.testChain(o.build("BEGIN-BEGIN".split(';')))).toBe("BAD");
	// });
	// it("chain 2886-2080;2080-9670;8765-1529;BEGIN-2080;9670-3998;3998-8765;1529-2886 is BAD", function() {
	// 	expect(o.testChain(o.build("2886-2080;2080-9670;8765-1529;BEGIN-2080;9670-3998;3998-8765;1529-2886".split(';')))).toBe("BAD");
	// });	
	it("chain BEGIN-5320;5320-END;6021-5320 is BAD", function() {
		expect(o.testChain(o.build("BEGIN-5320;5320-END;6021-5320".split(';')))).toBe("BAD");
	});
});

