"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearch = BinarySearch;
function BinarySearch(arr, target) {
    var sorted = __spreadArray([], arr, true).sort(function (a, b) { return a - b; });
    var first = 0;
    var last = sorted.length - 1;
    if (first === last) {
        return "Not Found";
    }
    // console.log(length);
    while (first <= last) {
        var middle = Math.floor((first + last) / 2);
        // console.log(middle);
        for (var i = 0; i < sorted.length; i++) {
            if (sorted[middle] === target) {
                return arr.indexOf(target);
            }
            if (sorted[middle] < target) {
                first = middle + 1;
            }
            else {
                last = middle - 1;
            }
        }
    }
    return "Not Found";
}
console.log(BinarySearch([2, 34, 24, 72, 46, 8], 22));
console.log(BinarySearch([2, 34, 24, 72, 46, 8], 46));
console.log(BinarySearch([], 2));
console.log(BinarySearch([46, 46, 46, 46], 46));
console.log(BinarySearch([2, 34, 24, 72, 46, 8], 8));
