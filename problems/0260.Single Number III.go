package main  

import "fmt"

func main() {
	var arr []int = []int{1, 2, 1, 3, 2, 5}
	fmt.Println(singleNumber(arr))
}


func singleNumber(nums []int) []int {
	result := make([]int, 2)
    xor := nums[0]

    for i := 1; i < len(nums); i++ {
    	xor = xor^nums[i]
    }

    xor = xor & (^(xor - 1))

    for i := 0; i < len(nums); i++ {
    	if (xor & nums[i]) != 0 {
    		result[0] ^= nums[i]
    	} else {
    		result[1] ^= nums[i]
    	}
    }

    return result
}