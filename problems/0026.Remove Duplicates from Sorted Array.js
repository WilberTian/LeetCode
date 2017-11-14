/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var idx = 1;

	for(var i = 1; i < nums.length; i++) {
		if(nums[i] !== nums[i - 1]) {
			nums[idx] = nums[i];
			idx++;
		} 
	}

	nums.length = idx;

	return idx
};



console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1, 1, 2, 4, 4]));