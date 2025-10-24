"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function groupAnagrams(words) {
    const groups = {};
    for (const word of words) {
        const sorted = word.split("").sort().join("");
        if (groups[sorted]) {
            groups[sorted].push(word);
        }
        else {
            groups[sorted] = [word];
        }
    }
    return Object.values(groups);
}
console.log(groupAnagrams(["care", "race", "acre", "dog", "god", "cat"]));
//# sourceMappingURL=t8d1Up.js.map