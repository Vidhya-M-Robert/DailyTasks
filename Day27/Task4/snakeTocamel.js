"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeTocamel = snakeTocamel;
function snakeTocamel(str) {
    if (str === "") {
        return "Invalid";
    }
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "_") {
            i++;
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    return result;
}
console.log(snakeTocamel(""));
