"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = isEven;
function isEven(num) {
    if (num <= 0 || (!Number.isInteger(num))) {
        return "Invalid";
    }
    var num1 = Math.floor(num / 2);
    if (num / 2 !== num1) {
        return "".concat(num, " is not an Even Number");
    }
    else {
        return "".concat(num, " is an Even Number");
    }
}
console.log(isEven(7));
