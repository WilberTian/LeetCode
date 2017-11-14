/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	var source = x;

    if (x < 0) {
    	return false;
    } else {
    	var target = 0;

    	while (x > 0) {
    		target = target * 10 + x % 10;
    		x = parseInt(x / 10);
    	}

    	return target === source;
    }
};

console.log(isPalindrome(1));
console.log(isPalindrome(123));
console.log(isPalindrome(12321));
console.log(isPalindrome(-2147447412));
