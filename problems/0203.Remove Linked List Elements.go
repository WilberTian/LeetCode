package main

import "fmt"

type ListNode struct {
    Val int
    Next *ListNode
}

func main() {
	h6 := &ListNode{6, nil}
	h5 := &ListNode{5, h6}
	h4 := &ListNode{4, h5}
	h3 := &ListNode{3, h4}
	h2 := &ListNode{2, h3}
	h1 := &ListNode{1, h2}
	
	head := removeElements(h1, 6)
	for head != nil {
		fmt.Println(head.Val)
		head = head.Next
	}
}


func removeElements(head *ListNode, val int) *ListNode {
    p := &ListNode{0, head}
    head = p

    for p.Next != nil {
    	if p.Next.Val == val {
    		p.Next = p.Next.Next
    	} else {
    		p = p.Next
    	}
    }

    return head.Next
}