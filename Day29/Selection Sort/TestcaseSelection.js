"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var selection_1 = require("./selection");
function testCases() {
    var testcases = [
        {
            input1: [7, 12, 9, 11, 3],
            output: [3, 7, 9, 11, 12]
        },
        {
            input1: [23, 42, 1, 40, 12, 17],
            output: [1, 12, 17, 23, 40, 42]
        },
        {
            input1: [7, 7, 7, 7],
            output: [7, 7, 7, 7],
        },
        {
            input1: [57, 32, 19, 11, 3],
            output: [3, 11, 19, 32, 57],
        },
        {
            input1: [],
            output: "Invalid"
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, selection_1.selectionSort)(testcase.input1);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
