"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifArmstrong = ifArmstrong;
function ifArmstrong(num) {
    if (!Number.isInteger(num) || num < 0) {
        return "Invalid Entry";
    }
    var count = 0;
    var newArr = [];
    var original = num;
    var stringg = num.toString();
    for (var i = 0; i < stringg.length; i++) {
        count++;
    }
    for (var j = 0; j < stringg.length; j++) {
        var cubes = Math.pow(stringg[j], count);
        newArr.push(cubes);
    }
    var sum = newArr.reduce(function (acc, cur) { return acc + cur; }, 0);
    return sum === original;
}
console.log(ifArmstrong(388));
