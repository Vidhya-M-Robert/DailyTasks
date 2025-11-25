"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFalsy = removeFalsy;
function removeFalsy(arr) {
    var removeFalsyArray = [];
    if (!Array.isArray(arr)) {
        return "Invalid";
    }
    if (arr.length === 0 || arr === "") {
        return "Invalid";
    }
    for (var i = 0; i < arr.length; i++) {
        var bool = Boolean(arr[i]);
        if (bool === true) {
            // console.log(arr[i])
            removeFalsyArray.push(arr[i]);
        }
    }
    return removeFalsyArray;
}
console.log(removeFalsy([false, null, NaN]));
