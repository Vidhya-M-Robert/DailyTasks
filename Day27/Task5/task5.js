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
exports.intersectionofTwo = intersectionofTwo;
function intersectionofTwo(arr1, arr2) {
    var first = new Set(__spreadArray([], arr1, true));
    var sec = new Set(__spreadArray([], arr2, true));
    var intersect = first.intersection(sec);
    console.log(intersect);
    var array = __spreadArray([], intersect, true);
    return array;
}
console.log(intersectionofTwo([1, 2, 3], [2, 3, 4]));
