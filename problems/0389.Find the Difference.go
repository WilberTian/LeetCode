package main 

import "fmt"

func main() {
	fmt.Println(findTheDifference("asdf", "asdfe"));
	fmt.Println(findTheDifference("a", "aa"));
}

func findTheDifference(s string, t string) byte {
	var sTotal byte
	tTotal := t[len(t) - 1]
	for i := 0; i < len(s); i++ {
		sTotal += s[i]
		tTotal += t[i]
	}

	return tTotal - sTotal
}