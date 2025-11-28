"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task2_1 = require("./Task2");
function testCases() {
    var testcases = [
        {
            input: 20,
            output: [
                2, 3, 5, 7, 11, 13, 17,
                19, 23, 29, 31, 37, 41, 43,
                47, 53, 59, 61, 67, 71
            ]
        },
        {
            input: 10,
            output: [
                2, 3, 5, 7, 11,
                13, 17, 19, 23, 29
            ]
        },
        {
            input: 50,
            output: [
                2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
                31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
                73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
                127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
                179, 181, 191, 193, 197, 199, 211, 223, 227, 229
            ]
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, Task2_1.SieveEratosthenes)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n                Got result: ").concat(result));
        }
    });
}
testCases();
