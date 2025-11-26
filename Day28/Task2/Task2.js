"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotatesArray = rotatesArray;
function rotatesArray(arr, k) {
    var laast = arr.slice(arr.length - k);
    var first = arr.slice(0, arr.length - k);
    return laast.concat(first);
}
// console.log(rotatesArray([1,2,3,4,5], 3));
// console.log(rotatesArray([1,2,3,4,5], 2));
// console.log(rotatesArray([1,2,3,4,5], 1));
// console.log(rotatesArray([1,2,3,4,5], 5));
console.log(rotatesArray([1, 2, 3, 4, 5], 0));
