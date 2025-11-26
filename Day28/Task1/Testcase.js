"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task1_1 = require("./Task1");
function testCases() {
    var testcases = [
        {
            input: 40,
            output: 104,
        },
        {
            input: 100,
            output: 212,
        },
        {
            input: 78.6,
            output: 173.48,
        },
        {
            input: 0,
            output: 32,
        },
        {
            input: 37.7778,
            output: 100.00004,
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, Task1_1.celsiustoFahrenheit)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
