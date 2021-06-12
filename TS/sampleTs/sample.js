'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Calling = /** @class */ (function () {
    function Calling() {
    }
    Calling.prototype.deepArthmetics = function (array) {
        var result = 0;
        var str = array.toString();
        str = str.match(/-?\d+/g);
        if (str != null) {
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var i = str_1[_i];
                result += parseInt(i);
            }
            console.log(result);
        }
        else
            console.log(0);
    };
    Calling.prototype.robotSteps = function () {
        var argument = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argument[_i] = arguments[_i];
        }
        var sum = [0, 0];
        if (argument != null) {
            for (var i = 0; i < argument.length; i++) {
                switch (i % 4) {
                    case 0:
                        sum[1] += argument[i];
                        break;
                    case 1:
                        sum[0] += argument[i];
                        break;
                    case 2:
                        sum[1] -= argument[i];
                        break;
                    case 3:
                        sum[0] -= argument[i];
                        break;
                }
            }
            console.log(sum);
        }
        else {
            console.log(sum);
        }
    };
    return Calling;
}());
var Pass = /** @class */ (function (_super) {
    __extends(Pass, _super);
    function Pass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pass;
}(Calling));
var call = new Pass();
call.deepArthmetics(["1", "five", "2wenty", "thr33"]);
call.deepArthmetics([["1X2", "t3n"], ["1024", "5", "64"]]);
call.deepArthmetics([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"], "-1s0"]]);
// Call RobotSteps
call.robotSteps(20, 30, 10, 40);
call.robotSteps(30, 40, 10);
call.robotSteps(10, -10);
call.robotSteps();
