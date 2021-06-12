'use strict'
namespace Fibo {
  export class Fibonacci {
    iccMinusFib(n: number):any {
      if (n >= 9) {
        let x = 8, y = 13, a = 8, b = 31, fib1 = 0, fib2 = 0
        const t = n - 8
        for (let i = 1; i <= t; i++) {
          fib1 = x + y
          x = y
          y = fib1
        }
        for (let i = 1; i <= t; i++) {
          fib2 = a + b
          a = b;
          b = parseInt(fib2.toString().split('').reverse().join(''))
        }
        return (fib2 - fib1)
      }
      else
        return 0
    }
  }
}