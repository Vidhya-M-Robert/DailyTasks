"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task9_1 = require("./task9");
function testCases() {
    var testcases = [
        {
            input: [11, 2, 14, 5, 6],
            output: "Not Sorted",
        },
        {
            input: [2, 3, 4, 5, 6],
            output: "Ascending",
        },
        {
            input: [6, 4, 3, 2, 1],
            output: "Descending"
        },
        {
            input: [24, 12, 12, 12, 12],
            output: "Descending",
        },
        {
            input: [12, 65, 87, 98, 24],
            output: "Not Sorted"
        }
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task9_1.ifSorted)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n                Got Result: ").concat(result));
        }
    });
}
testCases();
