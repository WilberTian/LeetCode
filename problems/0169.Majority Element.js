/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var result = {};

    for(var i = 0; i < nums.length; i++) {
    	if(nums[i] in result) {
    		result[nums[i]] += 1;
    	} else {
    		result[nums[i]] = 1;
    	}
    }

    for(var key in result) {
    	if(result[key] > parseInt(nums.length / 2)) {
    		return parseInt(key);
    	}
    }
};



console.log(majorityElement([1]));
console.log(majorityElement([3, 2, 3]));