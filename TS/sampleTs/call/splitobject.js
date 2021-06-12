'use strict';
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
