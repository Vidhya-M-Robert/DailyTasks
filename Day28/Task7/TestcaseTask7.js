"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task7_1 = require("./Task7");
function testCases() {
    var testcases = [
        {
            input: "?name=John&age=20&active=true",
            output: { name: 'John', age: '20', active: 'true' },
        },
        {
            input: "?name=John",
            output: "Invalid",
        },
        {
            input: "true?",
            output: "Invalid",
        },
        {
            input: "name=John&age=20",
            output: { name: 'John', age: '20' },
        },
        {
            input: "?name=John&&age=20",
            output: "Invalid",
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, Task7_1.urlQuerytoParams)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
