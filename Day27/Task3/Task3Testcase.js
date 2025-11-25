"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task3_1 = require("./task3");
function testCases() {
    var testcases = [
        {
            input: 153,
            output: true,
        },
        {
            input: 876,
            output: false,
        },
        {
            input: -23,
            output: "Invalid Entry",
        },
        {
            input: 9474,
            output: true,
        },
        {
            input: 56.98,
            output: "Invalid Entry",
        },
        {
            input: 388,
            output: false,
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task3_1.ifArmstrong)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n                Got Result: ").concat(result));
        }
    });
}
testCases();
