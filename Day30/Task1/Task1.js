"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EuclideanAlgo = EuclideanAlgo;
function EuclideanAlgo(a, b) {
    if (a === 0 || b === 0) {
        return "Invalid";
    }
    while (b !== 0) {
        if (a < b) {
            var temp = a;
            a = b;
            b = temp;
        }
        var rem = a % b;
        if (rem === 0) {
            return b;
        }
        else {
            a = b;
            b = rem;
        }
    }
}
console.log(EuclideanAlgo(0, 18));
