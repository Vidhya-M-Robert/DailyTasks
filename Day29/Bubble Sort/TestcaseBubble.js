"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bubble_1 = require("./bubble");
function testCases() {
    var testcases = [
        {
            input1: [24, 3, 72, 59, 34],
            output: [3, 24, 34, 59, 72]
        },
        {
            input1: [2, 4, 27, 34, 76],
            output: [2, 4, 27, 34, 76]
        },
        {
            input1: [2, 2, 2, 2, 2],
            output: [2, 2, 2, 2, 2],
        },
        {
            input1: [],
            output: "Invalid",
        },
        {
            input1: [92, 63, 42, 29, 12],
            output: [12, 29, 42, 63, 92]
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, bubble_1.BubbleSort)(testcase.input1);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
