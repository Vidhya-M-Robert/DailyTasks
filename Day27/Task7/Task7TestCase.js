"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task7_1 = require("./task7");
function testCases() {
    var testcases = [
        {
            input: "helloEverybody",
            output: 5
        },
        {
            input: "",
            output: 0
        },
        {
            input: "array",
            output: 2
        },
        {
            input: "hsdfn",
            output: 0
        },
        {
            input: "aeiou",
            output: 5
        },
        {
            input: "goodmorning",
            output: 4
        },
        {
            input: "thrshld",
            output: 0
        }
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task7_1.reverseVowels)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
