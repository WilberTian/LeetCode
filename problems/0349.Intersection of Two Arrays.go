package main 

import "fmt"

func main() {
	nums1 := []int{1, 2, 2, 3}
	nums2 := []int{2, 2}

	fmt.Println(intersection(nums1, nums2));
}


func intersection(nums1 []int, nums2 []int) []int {
	result := make([]int, 0)
	mapper := make(map[int]int)

    for i := 0; i < len(nums1); i++ {
    	for j := 0; j < len(nums2); j++ {
    		if nums1[i] == nums2[j] {
    			mapper[nums1[i]] += 1
    			break
    		}
    	}
    }

    for k, _ := range mapper {
    	result = append(result, k)
    }

    return result
}