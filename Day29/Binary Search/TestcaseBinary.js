"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binary_1 = require("./binary");
function testCases() {
    var testcases = [
        {
            input1: [2, 34, 24, 72, 46, 8],
            input2: 22,
            output: "Not Found"
        },
        {
            input1: [2, 34, 24, 72, 46, 8],
            input2: 46,
            output: 4
        },
        {
            input1: [],
            input2: 11,
            output: "Not Found"
        },
        {
            input1: [46, 46, 46, 46],
            input2: 46,
            output: 0
        },
        {
            input1: [2, 34, 24, 72, 46, 8],
            input2: 8,
            output: 5
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, binary_1.BinarySearch)(testcase.input1, testcase.input2);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
