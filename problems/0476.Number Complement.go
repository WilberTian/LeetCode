package main 

import "fmt"

func main() {
	fmt.Println(findComplement(5))
	fmt.Println(findComplement(1))
	fmt.Println(findComplement(2))
}

func getPower(count int) int {
	power := 1

	for i := 0; i < count; i++ {
		power *= 2
	}

	return power
}

func findComplement(num int) int {
	intSlice := make([]int, 0)
	result := 0

	for num != 0 {
		intSlice = append(intSlice, (num%2)^1)
		num = num / 2
	}   

	for i := 0; i < len(intSlice); i++ {
		result += intSlice[i] * getPower(i)
	}

	return result
}