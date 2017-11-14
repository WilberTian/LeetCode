/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var len = numbers.length;
    	lo = 0,
		hi = len - 1;

    while ((numbers[lo] + numbers[hi]) !== target) {
    	if ((numbers[lo] + numbers[hi]) < target) {
    		lo++;
    	} else {
    		hi--;
    	}
    }

    return [lo + 1, hi + 1];
};