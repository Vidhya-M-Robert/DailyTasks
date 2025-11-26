"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task3_1 = require("./Task3");
function testCases() {
    var testcases = [
        {
            input: [{ key: "a", value: 1 }, { key: "b", value: 2 }],
            output: { a: 1, b: 2 },
        },
        {
            input: [{ key: 1, value: "hello" }, { key: 2, value: "hai" }],
            output: { '1': 'hello', '2': 'hai' },
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, Task3_1.objectstoSingleObject)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
