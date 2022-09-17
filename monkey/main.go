package main

import (
	// "example/monkey/lexer"
	"example/monkey/repl"
	"fmt"
	"os"
	"os/user"
)

func main() {
	// myLex := lexer.New("=ij")
	// token := myLex.NextToken()
	// fmt.Println(token)
	user, err := user.Current()
	if err != nil {
		panic(err)
	}
	fmt.Printf("Hello %s! This is the Monkey programming language!\n",
		user.Username)
	fmt.Printf("Feel free to type in commands\n")
	repl.Start(os.Stdin, os.Stdout)
}
