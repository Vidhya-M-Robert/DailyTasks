"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linear_1 = require("./linear");
function testCases() {
    var testcases = [
        {
            input1: [12, 8, 16, 11, 24],
            input2: 16,
            output: 2
        },
        {
            input1: [12, 8, 16, 11, 24],
            input2: 6,
            output: "Element Not Found"
        },
        {
            input1: [12, 11, 16, 11, 24],
            input2: 11,
            output: 1,
        },
        {
            input1: [12, 8, 16, 11, 24],
            input2: 12,
            output: 0,
        },
        {
            input1: [12, 8, 16, 11, 24],
            input2: 39,
            output: "Element Not Found"
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, linear_1.linearSearch)(testcase.input1, testcase.input2);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
