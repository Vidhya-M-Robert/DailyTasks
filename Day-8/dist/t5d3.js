"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function NumberofArguments(...restPara) {
    let sum = 0;
    sum = restPara.reduce((acc, curr) => acc + curr);
    return sum;
}
console.log(NumberofArguments(1, 2, 3, 4));
console.log(NumberofArguments(1, 2));
//# sourceMappingURL=t5d3.js.map