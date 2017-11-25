/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if(n === 0) {
    	return 0;
    } else {
    	return parseInt(n/5) + trailingZeroes(parseInt(n/5));
    }
};