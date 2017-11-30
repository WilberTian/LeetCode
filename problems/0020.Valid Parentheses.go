package main 

import "fmt"

func main() {
	fmt.Println(isValid("()"))
	fmt.Println(isValid("[]"))
	fmt.Println(isValid("([)]"))
	fmt.Println(isValid("()[]"))
	fmt.Println(isValid("]"))
	fmt.Println(isValid(")["))
}


func isValid(s string) bool {
	stack := make([]byte, 0, len(s))

	var mapper map[byte]byte = map[byte]byte{
		')': '(',
		']': '[',
		'}': '{',
	}

  	for i := 0; i < len(s); i++ {
  		switch s[i] {
  		case '(', '[', '{':
  			stack = append(stack, s[i])
  		case ')', ']', '}':
			if len(stack) == 0 {
				return false
			}

			if stack[len(stack) - 1] == mapper[s[i]] {
				stack = stack[:(len(stack) - 1)]
			} else {
				stack = append(stack, s[i])
			}
  		}
  	}

    return len(stack) == 0
}