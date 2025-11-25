"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task5_ts_1 = require("./task5.ts");
function testCases() {
    var testcases = [
        {
            input1: [1, 2, 3],
            input2: [2, 3, 4],
            output: [2, 3]
        },
        {
            input1: [1, 2, 2, 4, 2, 3, 4],
            input2: [2, 4, 3, 5, 4, 3],
            output: [2, 4, 3, 4]
        },
        {
            input1: [],
            input2: [],
            output: "Invalid"
        },
        {
            input1: [1, 2, 3],
            input2: [2, 3, 4],
            output: [2, 3]
        },
        {
            input1: [],
            input2: [2, 3, 4],
            output: "Invalid"
        },
        {
            input1: [6, 9, 7],
            input2: [2, 3, 4],
            output: "There is nothing common"
        },
        {
            input1: [1, 2, 3],
            input2: [],
            output: "Invalid"
        },
        {
            input1: [1, 2, 3],
            input2: [6, 3, 4],
            output: [3]
        },
        {
            input1: [1, 21, 32],
            input2: [96, 13, 74],
            output: "There is nothing common"
        },
        {
            input1: [1, 2, 2, 1],
            input2: [1, 2, 2, 1],
            output: [1, 2, 2, 1]
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task5_ts_1.intersectionofTwo)(testcase.input1, testcase.input2);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
