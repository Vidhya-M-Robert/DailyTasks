"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupAnagrams = groupAnagrams;
function groupAnagrams(words) {
    if (!Array.isArray(words)) {
        return "Invalid Entry";
    }
    for (var i = 0; i < words.length; i++) {
        if (typeof (words[i]) !== "string" || words[i].length === 0) {
            return "Invalid";
        }
    }
    var result = {};
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var first = words_1[_i];
        var sort = first.split("").sort().join("");
        // console.log(sort);
        if (result[sort]) {
            result[sort].push(first);
            // console.log(result);
        }
        else {
            result[sort] = [first];
        }
    }
    var res = Object.values(result);
    return res.sort(function (a, b) { return b.length - a.length; });
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
