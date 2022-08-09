package main

import (
	"fmt"
)

func useState(a int) (func() int, func(int)) {
	var val = func() int {
		return a
	}

	var ch_val = func(i int) {
		a = i
		// return a
	}

	return val, ch_val
}

func main() {
	var a, change_a = useState(1)

	fmt.Printf("Result ~~> %v\n", a())

	change_a(2)
	fmt.Printf("Result ~~> %v\n", a())

	change_a(9)
	fmt.Printf("Result ~~> %v\n", a())
}
