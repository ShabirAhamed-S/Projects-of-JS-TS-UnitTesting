'use strict'

/// <reference path='fibonacci.ts' />
/// <reference path='splitobject.ts' />

import pro = require('./call/Problem')

class Calling implements pro.Problem {
  deepArthmetics(array: any[]): void {
    let result: number = 0
    let str: any = array.toString()
    str = str.match(/-?\d+/g)
    if (str != null) {
      for (let i of str) {
        result += parseInt(i)
      }
      console.log(result)
    }
    else
      console.log(0)
  }
  
  robotSteps(...argument: number[]) {
    let sum = [0, 0]
    if (argument != null) {
      for (let i = 0; i < argument.length; i++) {
        switch (i % 4) {
          case 0: sum[1] += argument[i]
            break
          case 1: sum[0] += argument[i]
            break
          case 2: sum[1] -= argument[i]
            break
          case 3: sum[0] -= argument[i]
            break
        }
      }
      console.log(sum)
    }
    else {
      console.log(sum)
    }
  }
  
}

class Pass extends Calling {
  
}

let call = new Pass()

call.deepArthmetics(["1", "five", "2wenty", "thr33"])
call.deepArthmetics([["1X2", "t3n"], ["1024", "5", "64"]])
call.deepArthmetics([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"], "-1s0"]])
// Call RobotSteps
call.robotSteps(20, 30, 10, 40)
call.robotSteps(30, 40, 10)
call.robotSteps(10, -10)
call.robotSteps()

// // Call PrintPattern
// call.callPat(new Pattern.Print())
// // Call ProdeuctSum
// call.callPro(new ProductSum.Product())

/*
let arr=["1", "five", "2wenty", "thr33",["1X2", "t3n"],["1024", "5", "64"]]
console.log(('shabi3 4 4 4 4').match(/\d+/g))      // Print number in an array string
console.log(arr.flat())                            // Print array elements in single square bracket '[]'
console.log(arr.flat().join(','))                  // Print array in single line without '[]'
*/

// //Productsum
// isProductSum(1, 31)
// isProductSum(60)
// isProductSum(1, 3, 7, 9, 0)
// isProductSum()

// //Fibonacci
// iccMinusFib(9)
// iccMinusFib(18)

// //PrintPattern
// console.log(print(9))
// console.log(print(-9))

// //Splitobject
// console.log(splitobject([
//   { name: "banana", quantity: 3 }, { name: "fruits", quantity: 2 }, { name: "grapes", quantity: 1 }
// ]));