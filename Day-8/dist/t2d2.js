"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wordcount(str) {
    let newStr = str.trim();
    let count = 0;
    if (newStr === "")
        return count;
    for (let i = 0; i <= newStr.length; i++) {
        if (newStr[i] === " ") {
            count++;
        }
    }
    return count + 1;
}
console.log(wordcount("Hello World"));
console.log(wordcount("This is a sample sentence."));
console.log(wordcount("Programming is fun!"));
//# sourceMappingURL=t2d2.js.map