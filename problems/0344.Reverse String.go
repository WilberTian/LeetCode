package main 

import "fmt"

func main() {
	fmt.Println(reverseString("hello"))	
}


func reverse(s []byte) {
    for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
        s[i], s[j] = s[j], s[i]
    }
}

func reverseString(s string) string {
    chars := []byte(s)
    reverse(chars)
    return string(chars)
}