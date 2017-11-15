/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	var idx = nums.length - 1;

    for(var i = 0; i < nums.length; i++) {
    	while(nums[i] === val && i <= idx) {
    		var temp = nums[i];
    		nums[i] = nums[idx];
    		nums[idx] = temp;
    		idx--;
    	}
    }
   	
    nums.length = idx + 1;
    return idx + 1;
};


console.log(removeElement([3, 2, 2, 3], 3));

console.log(removeElement([3, 3], 3));

console.log(removeElement([2], 3));