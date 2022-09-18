package board

import "fmt"

func Board() {
	// odd := [3]int{1, 3, 5}
	// even := [2]int{2, 4}

	fmt.Println("THIS IS BOARRRD")

	for i := 1; i <= 6; i++ {
		if i%2 == 0 {
			fmt.Print(" ")
		} else if i%2 != 0 {
			fmt.Print("|")
		}
	}
}
