/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var mapper = {},
		num;

    for (var i = 0; i < nums.length; i++) {
    	num = nums[i];
    	if(num in mapper) {
    		return [mapper[num], i];
    	} else {
    		mapper[target - num] = i;
    	}
    }
};