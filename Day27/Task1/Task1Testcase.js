"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task1_1 = require("./task1");
function testCases() {
    var testcases = [
        {
            input: [1, 2, 2, 3, 3, 3, 4],
            output: [1, 2, 3, 4],
        },
        {
            input: [1, 1, 1, 1],
            output: [1],
        },
        {
            input: [],
            output: "Invalid",
        },
        {
            input: [1, 2, 3, 4],
            output: [1, 2, 3, 4],
        },
        {
            input: ["1", 2, 2, "3", "3", 3, 4],
            output: "Invalid",
        },
        {
            input: [1, 1, 1, 1, 3, 4],
            output: [1, 3, 4],
        },
        {
            input: [3],
            output: [3]
        },
        {
            input: [1, 1, 1, 1, 3, 4],
            output: [1, 3, 4],
        }
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task1_1.findDuplicate)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n                Got Result: ").concat(result));
        }
    });
}
testCases();
