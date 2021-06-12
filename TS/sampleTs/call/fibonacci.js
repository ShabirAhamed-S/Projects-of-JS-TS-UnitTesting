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
