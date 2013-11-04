var a = ["0009+12009-023001+0-0+092"];
var pattern = /0+(\d+)(?:[+-]|$)/g;
a.forEach(function(num) {
  console.log(num, " => ", pattern, " : ", num.replace(pattern,"$1"));
  return;
  var max = num.length;
  var j = 0;
  while (j<max) {
console.log("starting j at :", j);
    var i = j;
    while('0' === num[j]) j++;
    if (2 < j-i) {
console.log("found zeroes in: ",num, ", at: ", i, ", ending at: ", j);
      num = num.splice(i,j-i);
console.log("now: ",num);
      j = i+1;
    }
    while('+' !== num[j] && '-' !== num[j] && j < max) j++;
    j++;
  }
  console.log(num);
//  console.log(num.replace(/0+(\d+)([+-]*)/g, "$1$2"));
});
