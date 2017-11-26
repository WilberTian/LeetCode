package main 

import "fmt"

func main() {
	fmt.Println(isPowerOfTwo(2))
	fmt.Println(isPowerOfTwo(4))
	fmt.Println(isPowerOfTwo(5))
	fmt.Println(isPowerOfTwo(6))
}


func isPowerOfTwo(n int) bool {
	if n <= 0 {
		return false
	}

    if n != 1 && n % 2 == 1 {
    	return false
    } else {
    	if n <= 2 {
    		return true
    	} else {
    		return isPowerOfTwo(n / 2)
    	}
    }
}