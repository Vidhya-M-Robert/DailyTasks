"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task1_1 = require("./task1");
function testCases() {
    var testcases = [
        {
            input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
        }
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task1_1.rotateMatrix)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n                Got Result: ").concat(result));
        }
    });
}
testCases();
