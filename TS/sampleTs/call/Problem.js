"use strict";
// namespace Problem {
// export interface Problem {
//   deepArthmetics(array: any[]): void
//   robotSteps(...argument:number[]): void
// }
// }
/// <reference path='fibonacci.ts' />
// / <reference path='pattern.ts' />
// / <reference path='productsum.ts' />
/// <reference path='splitobject.ts' />
exports.__esModule = true;
function callFib(call) {
    call.iccMinusFib(18);
}
function callSpl(call) {
    call.splitobject([{ name: "Mango", quantity: 3 }, { name: "fruits", quantity: 2 }, { name: "Orange", quantity: 1 }]);
}
// Call Fibonacci
callFib(new Fibo.Fibonacci);
// Call SplitOblject
callSpl(new SplitObject.Split);
