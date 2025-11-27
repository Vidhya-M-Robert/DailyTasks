"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = linearSearch;
function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return "Element Not Found";
}
console.log(linearSearch([12, 8, 16, 11, 24], 16));
console.log(linearSearch([12, 8, 16, 11, 24], 6));
console.log(linearSearch([12, 11, 16, 11, 24], 11));
console.log(linearSearch([12, 8, 16, 11, 24], 12));
console.log(linearSearch([12, 8, 16, 11, 24], 39));
