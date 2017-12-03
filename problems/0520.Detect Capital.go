package main 

import "fmt"

func main() {
	fmt.Println(detectCapitalUse("USA"))
	fmt.Println(detectCapitalUse("Hello"))
	fmt.Println(detectCapitalUse("HellO"))
	fmt.Println(detectCapitalUse("mL"))
}

func checkAllSameType(chars []byte, isCatital bool) bool {
	if isCatital {
		for i := 0; i < len(chars); i++ {
			if chars[i] < 'A' || chars[i] > 'Z' {
				return false
			}
		}
	} else {
		for i := 0; i < len(chars); i++ {
			if chars[i] < 'a' || chars[i] > 'z' {
				return false
			}
		}
	}

	return true
}

func detectCapitalUse(word string) bool {
    chars := []byte(word)

    if chars[0] <= 'Z' && chars[0] >= 'A' {
    	return checkAllSameType(chars[1:], true) || checkAllSameType(chars[1:], false)
    }

    return checkAllSameType(chars[1:], false)
}