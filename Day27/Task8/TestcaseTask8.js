"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task8_1 = require("./task8");
function testCases() {
    var testcases = [
        {
            input: { name: "John", age: 30 },
            output: "name = John&age = 30",
        },
        {
            input: { age: 40, name: "Harry" },
            output: "age = 40&name = Harry",
        },
        {
            input: { age: 40, name: "Harry", place: "wayanad" },
            output: "age = 40&name = Harry&place = wayanad",
        },
        {
            input: { name: "John" },
            output: "name = John",
        },
        {
            input: {},
            output: "Invalid",
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task8_1.ObjtoQuery)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n                Got Result: ").concat(result));
        }
    });
}
testCases();
