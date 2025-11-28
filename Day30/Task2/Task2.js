"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SieveEratosthenes = SieveEratosthenes;
function SieveEratosthenes(n) {
    var newArr = [];
    for (var i = 2; i <= n * n; i++) {
        newArr.push(i);
    }
    for (var k = 2; k < newArr.length; k++) {
        for (var j = k; j < newArr.length; j++) {
            if (newArr[j] % k === 0) {
                newArr.splice(j, 1);
            }
        }
    }
    return newArr.slice(0, n);
}
console.log(SieveEratosthenes(50));
