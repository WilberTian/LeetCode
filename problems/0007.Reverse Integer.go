package main 

import "fmt"

func main() {
	fmt.Println(reverse(123))
	fmt.Println(reverse(120))
	fmt.Println(reverse(-123))
	fmt.Println(reverse(1534236469))
}




func reverse(x int) int {
    result := 0

    for x != 0 {
    	result = result * 10 + x % 10
    	x = x / 10
    }

    if result > 2147483647 || result < -2147483648 {
		result = 0
	}
	
    return result
}