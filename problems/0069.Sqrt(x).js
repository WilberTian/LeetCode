/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	if(x === 0) return 0;

	var i = 1;

	while(!((i * i) <= x && ((i + 1) * (i + 1)) > x)) {
		i++;
	}   

	return i;
};


console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(4));
console.log(mySqrt(8));