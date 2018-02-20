/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  	var bs = (x^y).toString(2);
  	var count = 0;

  	for (i = 0; i < bs.length; i++) {
  		if (bs[i] === '1') {
  			count ++;
  		}
  	}  

  	return count;
};

console.log(hammingDistance(1, 4));