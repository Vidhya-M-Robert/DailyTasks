"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task6_1 = require("./task6");
function testCases() {
    var testcases = [
        {
            input: [false, null, NaN],
            output: []
        },
        {
            input: [54, false, null, 9, "HI", 0],
            output: [54, 9, 'HI']
        },
        {
            input: "",
            output: "Invalid"
        },
        {
            input: ["1", "2", "3"],
            output: ['1', '2', '3']
        },
        {
            input: [100, 0, 309, NaN, 500],
            output: [100, 309, 500]
        },
        {
            input: null,
            output: "Invalid"
        },
        {
            input: [-8, 0, -10, null, "hello"],
            output: [-8, -10, 'hello']
        },
        {
            input: {},
            output: "Invalid"
        },
        {
            input: [-2, '', 6, -8, '', -10],
            output: [-2, 6, -8, -10]
        },
        {
            input: ["Hi", 23, 90, "hello"],
            output: ['Hi', 23, 90, 'hello']
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task6_1.removeFalsy)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
