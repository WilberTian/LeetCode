package main 

import "fmt"

func main() {
	fmt.Println(judgeCircle("DD"))
	fmt.Println(judgeCircle("DU"))
}


func judgeCircle(moves string) bool {
    var mapper map[byte]int = map[byte]int {
    	'U': 0,
    	'D': 0,
    	'R': 0,
    	'L': 0,
    }

    for i := 0; i < len(moves); i++ {
    	mapper[moves[i]] += 1
    }

    return mapper['U'] == mapper['D'] && mapper['R'] == mapper['L']
}