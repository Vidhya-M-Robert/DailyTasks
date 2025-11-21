"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task3_1 = require("./task3");
function testCases() {
    var testcases = [
        {
            input: [100, 100, 90, 80],
            output: [{ score: 100, rank: 1 }, { score: 100, rank: 1 }, { score: 90, rank: 2 }, { score: 80, rank: 3 }]
        },
        {
            input: [90, 120, 75],
            output: [{ score: 120, rank: 1 }, { score: 90, rank: 2 }, { score: 75, rank: 3 }]
        },
        {
            input: [55, 99, -75],
            output: [{ score: 99, rank: 1 }, { score: 55, rank: 2 }, { score: -75, rank: 3 }]
        },
        {
            input: [90, 2, 45],
            output: [{ score: 90, rank: 1 }, { score: 45, rank: 2 }, { score: 2, rank: 3 }]
        },
        {
            input: [80, 80, 80],
            output: [{ score: 80, rank: 1 }, { score: 80, rank: 1 }, { score: 80, rank: 1 }]
        },
        {
            input: [0, 0, 0],
            output: [{ score: 0, rank: 1 }, { score: 0, rank: 1 }, { score: 0, rank: 1 }]
        },
        {
            input: [-24, -2, -78],
            output: [{ score: -2, rank: 1 }, { score: -24, rank: 2 }, { score: -78, rank: 3 }]
        },
        {
            input: [78, 9, -78],
            output: [{ score: 78, rank: 1 }, { score: 9, rank: 2 }, { score: -78, rank: 3 }]
        },
        {
            input: [-4, -4, -4],
            output: [{ score: -4, rank: 1 }, { score: -4, rank: 1 }, { score: -4, rank: 1 }]
        },
        {
            input: [-34, 0, 92],
            output: [{ score: 92, rank: 1 }, { score: 0, rank: 2 }, { score: -34, rank: 3 }]
        },
    ];
    testcases.forEach(function (testcase, index) {
        var result = (0, task3_1.SortByScoreRank)(testcase.input);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("Testcase ".concat(index + 1, ": ").concat(passed ? "pass" : "fail"));
        console.log("Expected:", testcase.output);
        console.log("Got:", result);
    });
}
testCases();
