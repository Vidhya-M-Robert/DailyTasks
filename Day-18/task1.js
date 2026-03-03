"use strict";
function findPowerSum(num) {
    if (typeof (num) !== "number") {
        return "Invalid";
    }
    let newArr = [];
    let sum;
    for (let i = 1; i <= num; i++) {
        // console.log(i);
        let power = i ** i;
        newArr.push(power);
        // console.log(newArr);
        sum = newArr.reduce((acc, curr) => acc + curr);
    }
    // console.log(sum);
    const string = sum.toString();
    // console.log(typeofstring);
    const sliced = string.slice(string.length - 10, string.length);
    const toNumber = Number(sliced);
    return toNumber;
}
console.log(findPowerSum(1));
console.log(findPowerSum(15));
console.log(findPowerSum(1000));
function testCases() {
    const testcases = [
        {
            input: 11,
            output: 5716741928
        },
        {
            input: "hello",
            output: "Invalid"
        },
        {
            input: 15,
            output: 4130199900
        },
        {
            input: null,
            output: "Invalid"
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
