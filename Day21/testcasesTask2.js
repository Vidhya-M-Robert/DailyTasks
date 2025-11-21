"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task2_1 = require("./task2");
function testCases() {
  var testcases = [
    {
      input: "A,B,C",
      output: ["A", "B", "C", "B", "C", "A", "C", "A", "B"],
    },
    {
      input: "1,2,3",
      output: ["1", "2", "3", "2", "3", "1", "3", "1", "2"],
    },
    {
      input: "",
      output: "Invalid",
    },
    {
      input: "12",
      output: ["1", "2", "2", "1"],
    },
    {
      input: "a",
      output: ["a"],
    },
    {
      input: "ok",
      output: ["o", "k", "k", "o"],
    },
    {
      input: "okay",
      output: [
        "o",
        "k",
        "a",
        "y",
        "k",
        "a",
        "y",
        "o",
        "a",
        "y",
        "o",
        "k",
        "y",
        "o",
        "k",
        "a",
      ],
    },
    {
      input: "A,L,U,O,C",
      output: [
        "A",
        "L",
        "U",
        "O",
        "C",
        "L",
        "U",
        "O",
        "C",
        "A",
        "U",
        "O",
        "C",
        "A",
        "L",
        "O",
        "C",
        "A",
        "L",
        "U",
        "C",
        "A",
        "L",
        "U",
        "O",
      ],
    },
  ];
  testcases.forEach(function (testcase, index) {
    var result = (0, task2_1.SeatingArrangementsWithRoundTable)(testcase.input);
    var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(
      "Testcase ".concat(index + 1, ": ").concat(passed ? "Pass" : "Fail")
    );
    if (!passed) {
      console.log(
        "Expected result: "
          .concat(testcase.output, "\n\n                Got Result: ")
          .concat(result)
      );
    }
  });
}
testCases();
