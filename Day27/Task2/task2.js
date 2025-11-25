"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostFrequent = mostFrequent;
function mostFrequent(arr) {
    if (arr.length === 0 || !Array.isArray(arr)) {
        return "Invalid";
    }
    var frequency = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var array = arr_1[_i];
        frequency[array] = (frequency[array] || 0) + 1;
    }
    console.log(frequency);
    var res = [];
    var values = Object.values(frequency);
    var max = Math.max.apply(Math, values);
    var keys = Object.keys(frequency);
    for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var key = keys_1[_a];
        if (frequency[key] === max) {
            res.push(key);
        }
    }
    return Number(res);
}
console.log(mostFrequent([1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4]));
