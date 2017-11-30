package main 

import "fmt"

func main() {

	fmt.Println(selfDividingNumbers(1, 22))
}

func isSelfDividing(num int) bool {
	temp := num

	for num != 0 {
		digit := num % 10
		num = num / 10

		if digit == 0 || temp % digit != 0 {
			return false
		}
	}

	return true
}

func selfDividingNumbers(left int, right int) []int {
	result := make([]int, 0)

    for i:= left; i <= right; i++ {
    	if isSelfDividing(i) {
    		result = append(result, i)
    	}
    }

    return result
}
