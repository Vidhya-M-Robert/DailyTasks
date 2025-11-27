"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = BubbleSort;
function BubbleSort(arr) {
    if (arr.length === 0) {
        return "Invalid";
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(BubbleSort([24, 3, 72, 59, 34]));
console.log(BubbleSort([2, 4, 27, 34, 76]));
console.log(BubbleSort([2, 2, 2, 2, 2]));
console.log(BubbleSort([]));
console.log(BubbleSort([92, 63, 42, 29, 12]));
