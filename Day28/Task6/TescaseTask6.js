"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task6_1 = require("./task6");
function testCases() {
    var testcases = [
        {
            input1: { name: "Brad", age: "25" },
            input2: { name: "Titan", place: "mars" },
            output: ['name'],
        },
        {
            input1: { place: "mars", age: "25" },
            input2: { name: "Titan", place: "mars" },
            output: ['place'],
        },
        {
            input1: { name: "Brad", age: "25" },
            input2: { brand: "Titan", place: "mars" },
            output: [],
        },
        {
            input1: { name: "Brad", name: "harry" },
            input2: { name: "Titan", name: "mars" },
            output: ['name'],
        },
        {
            input1: { name: "Brad", age: "25" },
            input2: { age: "89", age: "45" },
            output: ['age'],
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task6_1.commonKeys)(testcase.input1, testcase.input2);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
