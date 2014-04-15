var fs = require('fs');

var review = function(hand) {
	var count = {
		cards : 0,
		'2' : [],
		'3' : [],
		'4' : [],
		'5' : [],
		'6' : [],
		'7' : [],
		'8' : [],
		'9' : [],
		'T' : [],
		'J' : [],
		'Q' : [],
		'K' : [],
		'A' : [],
		'H' : [],
		'S' : [],
		'D' : [],
		'C' : []
	};
	var last = hand.length;
	for(var i=0; i<last; i++) {
		poss.cards++;
		poss[hand[i][0]].push(hand[i][1]);
		poss[hand[i][1]].push(hand[i][0]);
	}
	return poss;
};

var rank = function(card) {
	return '23456789TJQKA'.indexOf(card[0]);
};

var isFlush = function(count) {
	return count['H'] == count.cards ||  count['D'] == count.cards ||  count['S'] == count.cards ||  count['C'] == count.cards;
};

var isStraight = function(hand) {
	hand.for()
}

fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
	return "" !== test;
}).forEach(function(test) {
	var cards = test.split(' ');
	var lh = cards.slice(0, 5);
	var rh = cards.slice(5);
	console.log(cards);
	console.log(count(lh));
	console.log(count(rh));
});


// if there is a pair, then there is no straight or flush

// High Card: Highest value card.
// One Pair: Two cards of the same value.
// Two Pairs: Two different pairs.
// Three of a Kind: Three cards of the same value.
// Straight: All cards are consecutive values.
// Flush: All cards of the same suit.
// Full House: Three of a kind and a pair.
// Four of a Kind: Four cards of the same value.
// Straight Flush: All cards are consecutive values of same suit.
// Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
