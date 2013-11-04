var expr="0009+12009-023001+0-0+092";

var a = expr.split('+');
console.log(a);
var an = [];
a.forEach(function(add) {
	var s = add.split('-');
	console.log(s);
	var sn = [];
	s.forEach(function(num) {
		sn.push(parseInt(num,10));
	});
	an.push(sn.join('-'));
});

expr = an.join('+');
console.log(expr);