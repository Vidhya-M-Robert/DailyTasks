"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task8_1 = require("./Task8");
function testCases() {
    var testcases = [
        {
            input: "Room 45 on floor 3",
            output: "Room ## on floor #",
        },
        {
            input: "2343",
            output: "####",
        },
        {
            input: "234 45 on floor 3",
            output: "### ## on floor #",
        },
        {
            input: "Room on  the floor",
            output: "Room on  the floor",
        },
        {
            input: "",
            output: "Invalid",
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, Task8_1.replaceDigits)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n      Got Result: ").concat(result));
        }
    });
}
testCases();
