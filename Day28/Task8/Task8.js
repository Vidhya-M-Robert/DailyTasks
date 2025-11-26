"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceDigits = replaceDigits;
function replaceDigits(str) {
    if (str.length === 0) {
        return "Invalid";
    }
    var replaced = str.replaceAll(/\d/g, "#");
    return replaced;
}
console.log(replaceDigits(""));
replaceDigits("Room 45 on floor 3");
