"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseVowels = reverseVowels;
function reverseVowels(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    var vowels = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i].includes("A") || str[i].includes("E") || str[i].includes("I") || str[i].includes("O") || str[i].includes("U") || str[i].includes("a") || str[i].includes("e") || str[i].includes("i") || str[i].includes("o") || str[i].includes("u")) {
            vowels.push(str[i]);
        }
    }
    //    console.log(vowels);
    var count = vowels.length;
    return count;
}
console.log(reverseVowels("thrshld"));
