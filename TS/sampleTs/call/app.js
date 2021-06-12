'use strict';
var Fibo;
(function (Fibo) {
    var Fibonacci = /** @class */ (function () {
        function Fibonacci() {
        }
        Fibonacci.prototype.iccMinusFib = function (n) {
            if (n >= 9) {
                var x = 8, y = 13, a = 8, b = 31, fib1 = 0, fib2 = 0;
                var t = n - 8;
                for (var i = 1; i <= t; i++) {
                    fib1 = x + y;
                    x = y;
                    y = fib1;
                }
                for (var i = 1; i <= t; i++) {
                    fib2 = a + b;
                    a = b;
                    b = parseInt(fib2.toString().split('').reverse().join(''));
                }
                return (fib2 - fib1);
            }
            else
                return 0;
        };
        return Fibonacci;
    }());
    Fibo.Fibonacci = Fibonacci;
})(Fibo || (Fibo = {}));
var SplitObject;
(function (SplitObject) {
    var Split = /** @class */ (function () {
        function Split() {
        }
        Split.prototype.splitobject = function (arrayobject) {
            var array = [], k = 0;
            for (var _i = 0, arrayobject_1 = arrayobject; _i < arrayobject_1.length; _i++) {
                var i = arrayobject_1[_i];
                for (var _a = 0, _b = i.quantity; _a < _b.length; _a++) {
                    var j = _b[_a];
                    array[k] = {
                        name: i.name, quantity: 1
                    };
                    k++;
                }
            }
            return array;
        };
        return Split;
    }());
    SplitObject.Split = Split;
})(SplitObject || (SplitObject = {}));
