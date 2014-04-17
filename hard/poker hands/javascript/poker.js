var fs = require('fs');

var faces = "23456789TJQKA".split('');
var facesReversed = faces.slice(0).reverse();
var suits = "HDSC".split('');

var review = function(hand) {
	var count = {};
	faces.forEach(function(face) { count[face] = []; });
	suits.forEach(function(suit) { count[suit] = []; });
	count.cards = hand.length;
	count.pairs = [];
	count.threeOfAKind = [];
	count.fourOfAKind = [];
	count.straight = [];

	for(var i=0; i<count.cards; i++) {
		var card = hand[i];
		var face = card[0];
		var suit = card[1];
		count[face].push(suit);		// record suit for face
		count[suit].push(face);		// record face for suit
	}

	var run = [];
	faces.forEach(function(face) {
		switch(count[face].length) {
		case 0:
			if (5 == run.length) count.straight = run;
			run = [];
			break;
		case 1:
			run.unshift(face);
			break;
		case 2:
			count.pairs.push(face);
			break;
		case 3:
			count.threeOfAKind.push(face);
			break;
		case 4:
			count.fourOfAKind.push(face)
			break;
		}
	});
	if (5 == run.length) count.straight = run;

	return count;
};

var score = function(count) {
	var isFlush = suits.reduce(function(flush, suit) { return flush || count[suit].length == 5; }, false);
	if (isFlush && count.straight.length == 5) return 8;
	if (count.fourOfAKind.length == 1) return 7;
	if (count.threeOfAKind.length == 1 && count.pairs.length == 1) return 6;
	if (isFlush) return 5;
	if (count.straight.length > 0) return 4;
	if (count.threeOfAKind.length == 1) return 3;
	if (count.pairs.length == 2) return 2;
	if (count.pairs.length == 1) return 1;
	return 0;
};

var rank = function(face) {
	return faces.indexOf(face);
};

var compare = function(left, right) {
	var i, l;
	var lscore = score(left);
	var rscore = score(right);
	var rankorder = function(a,b) { 
		var ra = rank(a);
		var rb = rank(b);
		return ra < rb ? 1 : ra == rb ? 0 : -1;
	};

	if (lscore == rscore) {
		// break the tie
		switch(lscore) {
		case 8: // straight flush
		case 4: // straight
			i=0;
			while (lscore == rscore && i<5) {
				lscore = rank(left.straight[i]);
				rscore = rank(right.straight[i]);
				i++;
			}
			break;
		case 7: // four of a kind
			lscore = rank(left.fourOfAKind[0]);
			rscore = rank(right.fourOfAKind[0]);
			break;
		case 6: // full house
			lscore = rank(left.threeOfAKind[0]);
			rscore = rank(right.threeOfAKind[0]);
			// if three of a kind are equal, try pairs
			if (lscore == rscore) {
				lscore = rank(left.pairs[0]);
				rscore = rank(right.pairs[0]);
			}
			break;
		case 5: // flush
			lfaces = suits.reduce(function(faces, suit) { return 5 == left[suit].length ? left[suit].sort(rankorder) : faces; }, []);
			rfaces = suits.reduce(function(faces, suit) { return 5 == right[suit].length ? right[suit].sort(rankorder) : faces; }, []);

			i=0;
			while(lscore == rscore && i<5) {
				lscore = rank(lfaces[i]);
				rscore = rank(rfaces[i]);
				i++;
			}
			break;
		case 3: // three of a kind
			lscore = rank(left.threeOfAKind[0]);
			rscore = rank(right.threeOfAKind[0]);
			break;
		case 2: // two pair
			lpair = left.pairs.sort(rankorder);
			rpair = right.pairs.sort(rankorder);
		  lscore = rank(lpair[0]);
		  rscore = rank(rpair[0]);
		  // if the first pairs are equal, try the second pair
		  if (lscore == rscore) {
			  lscore = rank(lpair[1]);
			  rscore = rank(rpair[1]);
				// if the second pairs are equal, find the high card
				if (lscore == rscore) {
					facesReversed.forEach(function(face) {
						if (0 < left[face].length) { lscore = rank(face); }
						if (0 < right[face].length) { rscore = rank(face); }
					});
				}
		  }
			break;
		case 1: // pair
		  lscore = rank(left.pairs[0]);
		  rscore = rank(right.pairs[0]);
			// if the pairs are equal, find the high card
			if (lscore == rscore) {
				var facesReversedLength = facesReversed.length;
				for(var i=0; i<facesReversedLength; i++) {
				  lscore = rscore = 0;
					var face = facesReversed[i];
					if (1 == left[face].length) { lscore = rank(face); }
					if (1 == right[face].length) { rscore = rank(face); }
					if (lscore != rscore) { break; }
				}
			}
			break;
		case 0:
			var facesReversedLength = facesReversed.length;
			for(var i=0; i<facesReversedLength; i++) {
			  lscore = rscore = 0;
				var face = facesReversed[i];
				if (1 == left[face].length) { lscore = rank(face); }
				if (1 == right[face].length) { rscore = rank(face); }
				if (lscore != rscore) { break; }
			}
		}
	}
	if (lscore > rscore) return -1;
	if (lscore < rscore) return 1;
	return 0;
};


if (require.main === module) {
	fs.readFileSync(process.argv[2]).toString().split('\n').filter(function(test) {
		return "" !== test;
	}).forEach(function(test) {
		var cards = test.split(' ');
		var lh = review(cards.slice(0, 5));
		var rh = review(cards.slice(5));
		var result = compare(lh, rh);
		console.log(result === 0 ? "none" : result < 0 ? "left" : "right");
	});
} else {
	exports.rank = rank;
	exports.review = review;
	exports.compare = compare;
}


