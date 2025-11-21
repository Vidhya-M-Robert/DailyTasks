"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task8_1 = require("./task8");
function testCases() {
    var testcases = [
        {
            input: 1000,
            output: "1000 is an Even Number"
        },
        {
            input: -2,
            output: "Invalid"
        },
        {
            input: 9,
            output: "9 is not an Even Number"
        },
        {
            input: 13.5,
            output: "Invalid"
        },
        {
            input: 4,
            output: "4 is an Even Number"
        },
        {
            input: -34,
            output: "Invalid"
        },
        {
            input: 1024,
            output: "1024 is an Even Number"
        },
        {
            input: 10000257,
            output: "10000257 is not an Even Number"
        },
        {
            input: 92.756,
            output: "Invalid"
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task8_1.isEven)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n                Got Result: ").concat(result));
        }
    });
}
testCases();
