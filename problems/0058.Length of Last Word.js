/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var len = s.length,
    	count = 0;

    while(len > 0) {
    	len--;

    	if(s[len] !== ' ') {
    		count++;
    	} else {
    		if(count > 0) {
    			break;
    		}
    	}
    }

    return count;
};


console.log(lengthOfLastWord('hello world'));
console.log(lengthOfLastWord('   '));
console.log(lengthOfLastWord('hello'));
console.log(lengthOfLastWord('hello world   '));