package main 

import "fmt"

func main() {
	fmt.Println(addDigits(38))
	fmt.Println(addDigits(9))
	fmt.Println(addDigits(18))
}



func addDigits(num int) int {
    if num == 0 {
    	return 0
    }

    return (num - 1) % 9 + 1
}