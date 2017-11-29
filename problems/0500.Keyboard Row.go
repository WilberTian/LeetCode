package main 

import (
	"fmt"
)

func main() {
	strs := []string{"Hello", "Alaska", "Dad", "Peace"}
	fmt.Println(findWords(strs))	
}

func getRow(c byte) int {
	if c < 'a' || c > 'z' {
		c = c + ('a' - 'A')
	}
	
	row := 0

	switch c {
	case 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p':
		row = 1
	case 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l':
		row = 2
	case 'z', 'x', 'c', 'v', 'b', 'n', 'm':
		row = 3
	}

	return row
}

func checkRowWord(word string) bool {
	row := getRow(word[0])
	for i := 1; i < len(word); i++ {
		if row != getRow(word[i]) {
			return false
		}
	}

	return true
}

func findWords(words []string) []string {
	var result = make([]string, 0)

	for i := 0; i < len(words); i++ {
		if checkRowWord(words[i]) {
			result = append(result, words[i])
		}
	}

	return result
}