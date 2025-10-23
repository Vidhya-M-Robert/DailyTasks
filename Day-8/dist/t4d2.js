"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkAnagram(str1, str2) {
    let newStr1 = str1.toLowerCase().split("").sort().join('');
    let newStr2 = str2.toLowerCase().split("").sort().join('');
    if (newStr1.length !== newStr2.length)
        return false;
    const anagram = newStr1 === newStr2 ? true : false;
    return anagram;
}
console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("restful", "fluster"));
console.log(checkAnagram("hello", "world"));
//# sourceMappingURL=t4d2.js.map