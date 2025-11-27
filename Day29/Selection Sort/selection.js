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
exports.selectionSort = selectionSort;
function selectionSort(arr) {
    if (arr.length === 0) {
        return "Invalid";
    }
    var newArr = __spreadArray([], arr, true);
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var min = Math.min.apply(Math, newArr);
        res.push(min);
        var index = newArr.indexOf(min);
        newArr.splice(index, 1);
    }
    return res;
}
console.log(selectionSort([7, 12, 9, 11, 3]));
console.log(selectionSort([23, 42, 1, 40, 12, 17]));
console.log(selectionSort([7, 7, 7, 7]));
console.log(selectionSort([57, 32, 19, 11, 3]));
console.log(selectionSort([]));
