"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task2_1 = require("./task2");
function testCases() {
    var testcases = [
        {
            input: "name=Harry&age=20&place=wayand",
            output: { name: 'Harry', age: '20', place: 'wayand' }
        },
        {
            input: "",
            output: "Invalid"
        },
        {
            input: "name=John&age=20",
            output: { name: 'John', age: '20' }
        },
        {
            input: "slavia",
            output: "Invalid"
        },
        {
            input: "maserati=ghibli&toyota=supra",
            output: { maserati: 'ghibli', toyota: 'supra' }
        },
        {
            input: "hyryder&vitara",
            output: "Invalid"
        },
        {
            input: "hyryder=toyota vitara=suzuki",
            output: "Invalid"
        },
        {
            input: "hello:world",
            output: "Invalid"
        },
        {
            input: "hello&&world",
            output: "Invalid"
        }
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task2_1.parseStringtoObject)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail"));
        if (!passed) {
            console.log("Expected result: ".concat(testcase.output, "\n\n                Got Result: ").concat(result));
        }
    });
}
testCases();
