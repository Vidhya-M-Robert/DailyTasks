"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function prime(num) {
    if (num <= 1) {
        return false;
    }
    else {
        for (let i = 2; i <= num - 1; i++) {
            if (num % i === 0) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}
console.log(prime(7));
console.log(prime(10));
console.log(prime(29));
//# sourceMappingURL=t1d2.js.map