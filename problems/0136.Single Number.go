package main

import "fmt"

func main() {
	arr1 := []int{1, 2, 2}
	fmt.Println(singleNumber(arr1))
}

func singleNumber(nums []int) int {
    result := nums[0]
    for i := 1; i < len(nums); i++ {
        result = result ^ nums[i]
    }
    return result
}

