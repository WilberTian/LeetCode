package main 

import "fmt"

func main() {
	fmt.Println(isIsomorphic("add", "egg"))
	fmt.Println(isIsomorphic("foo", "bar"))
	fmt.Println(isIsomorphic("ab", "aa"))
	fmt.Println(isIsomorphic("ab", "ca"))
}


func checker(s string, t string) bool {
	mapper := make(map[byte]byte)

    for i := 0; i < len(s); i++ {
    	if _, ok := mapper[s[i]]; ok {
    		if mapper[s[i]] != t[i] {
    			return false
    		}
    	} else {
    		mapper[s[i]] = t[i]
    	}
    }

    return true
}
func isIsomorphic(s string, t string) bool {
    return checker(s, t) && checker(t, s)
}