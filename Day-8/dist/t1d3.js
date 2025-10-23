"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumArray(arr) {
    const splitted1 = String(arr.slice(0, 1));
    console.log(splitted1);
    const splitted2 = String(arr.slice(1));
    console.log(splitted2);
    const replaced1 = Number(splitted1.replaceAll(",", ""));
    console.log(replaced1);
    const replaced2 = Number(splitted2.replaceAll(",", ""));
    console.log(replaced2);
    return replaced1 + replaced2;
}
console.log(sumArray([[1, 2, 3], [0, 7]]));
//# sourceMappingURL=t1d3.js.map