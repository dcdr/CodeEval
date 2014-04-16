var poker = require("../javascript/poker");

describe("poker", function() {
	it("queen ranks 10", function() {
		var rank = poker.rank("Q");
		expect(rank).toBe(10);
	});
	it("4 ranks 2", function() {
		var rank = poker.rank('4');
		expect(rank).toBe(2);
	});
	it("T ranks 8", function() {
		var rank = poker.rank('T');
		expect(rank).toBe(8);
	});
	it("8 ranks 6", function() {
		var rank = poker.rank('8');
		expect(rank).toBe(6);
	});

	it("hand contains pair of 7s", function() {
		var count = poker.review(["QH", "7S", "5C", "8C", "7D"]);
		expect(count.pairs.length).toBe(1);
	});

	it("hand contains pair of 7s and Qs", function() {
		var count = poker.review(["QH", "7S", "QC", "8C", "7D"]);
		expect(count.pairs.length).toBe(2);
		expect(count.pairs.indexOf('Q')).not.toBe(-1);
		expect(count.pairs.indexOf('7')).not.toBe(-1);
		expect(count.pairs.indexOf('8')).toBe(-1);
	});

	it("hand contains a full house", function() {
		var count = poker.review(["QH", "7S", "QC", "7C", "7D"]);
		expect(count.pairs.length).toBe(1);
		expect(count.threeOfAKind.length).toBe(1);
	});

	it("hand contains a Q high straight", function() {
		var count = poker.review(["QH", "TS", "9C", "JC", "8D"]);
		expect(count.straight.length).toBe(5);
	});

	it("hand contains an A high straight", function() {
		var count = poker.review("AH JD QS KH TD".split(' '));
		expect(count.straight.length).toBe(5);
	});

	it("hand contains flush", function() {
		var count = poker.review(["QH", "7H", "5H", "8H", "2H"]);
		expect(count['H'].length).toBe(5);
	});

	it ("left's pair of 7s beats right's A", function() {
		var left = poker.review(["6D", "7H", "AH", "7S", "QC"]);
		var right = poker.review(["6H", "2D", "TD", "JD", "AS"]);
		expect(poker.compare(left,right)).toBe(-1);
	});

	it ("left's pair of Js matches right's pair of J's", function() {
		var left = poker.review("JH 5D 7H TC JS".split(' '));
		var right = poker.review("JD JC TS 5S 7S".split(' '));
		expect(poker.compare(left,right)).toBe(0);
	});

	it ("right's pair of 6's beats left's A", function() {
		var left = poker.review("2H 8C AD TH 6H".split(' '));
		var right = poker.review("QD KD 9H 6S 6C".split(' '));
		expect(poker.compare(left,right)).toBe(1);
	});

	it ("left's K/T/8/7 high beats right's K/T/8/4 high", function() {
		var left = poker.review("2H TH 8S 7D KS".split(' '));
		var right = poker.review("KD TS 3H 4C 8C".split(' '));
		expect(poker.compare(left,right)).toBe(-1);
	});
 
	it ("left's 10's beat right's 9's over 7", function() {
		var left = poker.review("TH TD 2H 3H 4H".split(' '));
		var right = poker.review("9D 9S 7S 6S 5D".split(' '));
		expect(poker.compare(left,right)).toBe(-1);
	});

	it ("left's 10's beat right's 9's over A", function() {
		var left = poker.review("TH TD 2H 3H 4H".split(' '));
		var right = poker.review("9D 9S AS 6S 5D".split(' '));
		expect(poker.compare(left,right)).toBe(-1);
	});

	it ("right's 10's over 7 beats left's 10's over 4", function() {
		var left = poker.review("TH TD 2H 3H 4H".split(' '));
		var right = poker.review("TS TC 7S 6S 5D".split(' '));
		expect(poker.compare(left,right)).toBe(1);
	});
 

	it ("left's 10's over 4 matches right's 10's over 4", function() {
		var left = poker.review("TH TD 2H 3H 4H".split(' '));
		var right = poker.review("TS TC 2S 3S 4D".split(' '));
		expect(poker.compare(left,right)).toBe(0);
	});

	it ("left's full house beats right's three A's", function() {
		var left = poker.review("KH KC KD 2D 2H".split(' '));
		var right = poker.review("AH AC AS QD JD".split(' '));
		expect(poker.compare(left,right)).toBe(-1);
	});
 

	it ("left's 6 high straight matches right's 6 high straight", function() {
		var left = poker.review("2S 3C 4S 5C 6S".split(' '));
		var right = poker.review("2H 3D 4H 5D 6H".split(' '));
		expect(poker.compare(left,right)).toBe(0);
	});

	it ("left's 7 high straight beats right's 6 high straight", function() {
		var left = poker.review("3C 4S 5C 6S 7C".split(' '));
		var right = poker.review("2H 3D 4H 5D 6H".split(' '));
		expect(poker.compare(left,right)).toBe(-1);
	});
 

	it ("left's flush matches right's flush", function() {
		var left = poker.review("2S 3S 4S 5S 6S".split(' '));
		var right = poker.review("2H 3H 6H 5H 4H".split(' '));
		expect(poker.compare(left,right)).toBe(0);
	});

	it ("right's J high flush beats left's 8 high flush", function() {
		var left = poker.review("2H 3H 8H 5H 6H".split(' '));
		var right = poker.review("7S JS 4S 5S 6S".split(' '));
		expect(poker.compare(left,right)).toBe(1);
	});

	it ("right's J's over A's beats lefts 10's over K's", function() {
		var left = poker.review("TH TD TS KH KD".split(' '));
		var right = poker.review("JH JD JS AC AD".split(' '));
		expect(poker.compare(left,right)).toBe(1);
	});

	it ("right's four 5's beats left's four 2's", function() {
		var left = poker.review("2H 2D 2S 2C AH".split(' '));
		var right = poker.review("5D 5H 5S 5C KS".split(' '));
		expect(poker.compare(left,right)).toBe(1);
	});

	it ("right's J high straight flush beats left's 6 high straight flush", function() {
		var left = poker.review("2H 6H 4H 3H 5H".split(' '));
		var right = poker.review("JH 8H TH 7H 9H".split(' '));
		expect(poker.compare(left,right)).toBe(1);
	});

	it ("left's straight flush matches right's straight flush", function() {
		var left = poker.review("2H 6H 5H 3H 4H".split(' '));
		var right = poker.review("4C 3C 5C 6C 2C".split(' '));
		expect(poker.compare(left,right)).toBe(0);
	});

	it ("left's straight flush beats right's four of a kind", function() {
		var left = poker.review("2H 6H 5H 3H 4H".split(' '));
		var right = poker.review("AC AH AD AS KS".split(' '));
		expect(poker.compare(left,right)).toBe(-1);
	});

	it ("right's four of a kind beats left's full house", function() {
		var left = poker.review("QS QH JH QD JS".split(' '));
		var right = poker.review("AC AH AD AS KS".split(' '));
		expect(poker.compare(left,right)).toBe(1);
	});

	it ("left's full house beats right's flush", function() {
		var left = poker.review("QS QH JH QD JS".split(' '));
		var right = poker.review("6S 9S 2S TS 8S".split(' '));
		expect(poker.compare(left,right)).toBe(-1);
	});

	it ("right's flush beats left's straight", function() {
		var left = poker.review("AH JD QS KH TD".split(' '));
		var right = poker.review("6S 9S 2S TS 8S".split(' '));
		expect(poker.compare(left,right)).toBe(1);
	});

	it ("left's straight beats rights three of a kind", function() {
		var left = poker.review("AH JD QS KH TD".split(' '));
		var right = poker.review("9H 9D 9S TS 8H".split(' '));
		expect(poker.compare(left,right)).toBe(-1);
	});

	it ("right's three of a kind beats left's two pair", function() {
		var left = poker.review("AH AS KC KD QS".split(' '));
		var right = poker.review("9H 9D 9S TS 8H".split(' '));
		expect(poker.compare(left,right)).toBe(1);
	});

	it ("left's two pair beats right's pair", function() {
		var left = poker.review("2S 2D 3H 3C QS".split(' '));
		var right = poker.review("AD AH 9S TS 8H".split(' '));
		expect(poker.compare(left,right)).toBe(-1);
	});

	it ("left's K's over Q/9 beats right's K's over Q/7", function() {
		var left = poker.review("6D KD 9S QS KS".split(' '));
		var right = poker.review("QC 3S 7D KC KH".split(' '));
		expect(poker.compare(left,right)).toBe(-1);
	});
});
