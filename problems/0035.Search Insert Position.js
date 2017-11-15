/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	if(nums.length === 0 || nums[0] >= target) return 0;

	for(var i = 1; i < nums.length; i++) {
		if(nums[i] >= target) {
			return i;
		}
	}  

	return nums.length;
};




console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));