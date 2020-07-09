package main

import "fmt"

func findCircleNum(M [][]int) int {
	N :=len(M)
	fmt.Printf("%d",N)
	res := N
	friend := make([]int, res)
	for i := 0; i < res; i++ {
		friend[i] = i
	}

	union := func(s,d int) {
		for i := range friend {
			if friend[i] == s {
				friend[i] = d
			}
		}
	}

	for i:=0; i<N; i++ {
		for j:=i+1; j<N; j++{
			if M[i][j] == 1 {
				res--
				fmt.Printf("i是%d,j是%d\n", friend[i], friend[j])
				union(friend[i], friend[j])
			}
		}
	}
	return res
}
func main() {
	count := findCircleNum([][]int{
		{1,1,0},
		{1,1,0},
		{0,0,1},
	})
	fmt.Printf("朋友圈的数量是%d",count);
}