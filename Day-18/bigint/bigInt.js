"use strict";
function findPowerSum(num) {
    if (Math.round(num) !== num || num <= 0 || typeof (num) !== "number") {
        return "Invalid";
    }
    let sum = 0n;
    for (let i = 1n; i <= BigInt(num); i++) {
        let power = i ** i;
        sum += power;
    }
    const stringValue = sum.toString();
    const lastTen = stringValue.slice(-10).padStart(10, "0");
    return lastTen;
}
// console.log(findPowerSum(10));
// console.log(findPowerSum(1000));
// console.log(findPowerSum(3));
function testCases() {
    const testcases = [
        {
            input: 15,
            output: "4130199828"
        },
        {
            input: 4.6,
            output: "Invalid"
        },
        {
            input: true,
            output: "Invalid"
        },
        {
            input: 10,
            output: "0405071317"
        },
        {
            input: -65,
            output: "Invalid"
        },
        {
            input: 0,
            output: "Invalid"
        },
        {
            input: ["true"],
            output: "Invalid"
        },
        {
            input: {},
            output: "Invalid"
        },
        {
            input: 1000,
            output: "9110846700"
        },
        {
            input: null,
            output: "Invalid"
        },
        {
            input: 3,
            output: "0000000032"
        },
    ];
    for (let i = 0; i < testcases.length; i++) {
        const test = testcases[i];
        const result = findPowerSum(test.input);
        const passStatus = JSON.stringify(result) === JSON.stringify(test.output);
        console.log(`Test ${i + 1}:`, passStatus ? "Pass" : "Fail");
        if (!passStatus) {
            console.log("Expected output:", test.output);
            console.log("Output Got:", result);
        }
    }
}
testCases();
