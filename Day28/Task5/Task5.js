"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateSum = CalculateSum;
function CalculateSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++;
            }
        }
        if (count === 1) {
            sum = sum + arr[i];
        }
    }
    return sum;
}
console.log(CalculateSum([1, 1, 1, 1, 1]));
console.log(CalculateSum([1, 2, 3, 2]));
console.log(CalculateSum([1, 2, 3, 4, 5]));
console.log(CalculateSum([1, 1, 2, 6, 7, 2, 7]));
