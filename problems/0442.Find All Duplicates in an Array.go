package main 

import "fmt"

func main() {
	arr := []int{4,3,2,7,8,2,3,1}
	fmt.Println(findDuplicates(arr))
}

func findDuplicates(nums []int) []int {
	result := make([]int, 0)

	i := 0
    for i < len(nums) {
    	if nums[i] <= 0 {
    		i += 1
    	} else {
    		idx := nums[i] - 1
    		if nums[idx] != 0 {
    			nums[i], nums[idx] = nums[idx], 0
    		} else {
    			result = append(result, nums[i])
    			nums[i] = -1
    			i += 1
    		}
    		
    	}
    }

    return result
}