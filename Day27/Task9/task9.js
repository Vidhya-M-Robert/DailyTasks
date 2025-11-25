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
exports.ifSorted = ifSorted;
function ifSorted(arr) {
    var asce = __spreadArray([], arr, true).sort(function (a, b) { return a - b; });
    var desc = __spreadArray([], arr, true).sort(function (a, b) { return b - a; });
    if (JSON.stringify(arr) === JSON.stringify(asce)) {
        return "Ascending";
    }
    else if (JSON.stringify(arr) === JSON.stringify(desc)) {
        return "Descending";
    }
    else {
        return "Not Sorted";
    }
}
console.log(ifSorted([24, 12, 12, 12, 12]));
