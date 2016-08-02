package main

import (
    "fmt"
    "time"
  )

func fib(x float32) float32{
    if(x==1){
      return x
    } else{
        return x * fib(x-1)
    }
}

func main() {
  var start = time.Now()
  for i := 0; i < 10000; i++ {
		fib(1500)
	}
  var end = time.Since(start)
  fmt.Printf("%s", end)
}
