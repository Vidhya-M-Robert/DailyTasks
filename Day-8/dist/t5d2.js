"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function letterFreq(str) {
    let words = str.split("").join("").toLowerCase();
    let count = {};
    for (let word of words) {
        count[word] = (count[word] || 0) + 1;
    }
    console.log(typeof count);
    return count;
}
console.log(letterFreq("hello"));
//# sourceMappingURL=t5d2.js.map