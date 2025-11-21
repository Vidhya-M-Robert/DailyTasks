"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectionofArrays = intersectionofArrays;
function intersectionofArrays(arr1, arr2) {
    var res = [];
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length === 0 || arr2.length === 0)
        return "Invalid";
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                res.push(arr1[i]);
                arr1.splice(i, 1);
            }
        }
    }
    if (res.length === 0) {
        return "There is nothing common";
    }
    return res;
}
// console.log(intersectionofArrays([1,2,2,4,2,3,4], [2,4,3,5,4,3]));
// console.log(intersectionofArrays([1,21,32],[96,13,74]))
console.log(intersectionofArrays([1, 2, 2, 1], [1, 2, 2, 1]));
