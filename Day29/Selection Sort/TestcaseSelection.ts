import { selectionSort } from "./selection";
function testCases() {
  const testcases = [
    {
      input1: [ 7, 12, 9, 11, 3],
      output: [ 3, 7, 9, 11, 12 ]
    },
    {
      input1: [ 23,42,1,40,12,17],
      output: [ 1, 12, 17, 23, 40, 42 ]
    },
    {
      input1: [ 7, 7, 7, 7],
      output: [ 7, 7, 7, 7 ],
    },
    {
      input1: [ 57, 32, 19, 11, 3],
      output: [ 3, 11, 19, 32, 57 ],
    },
    {
      input1: [],
      output: "Invalid"
    },
  ];
  testcases.forEach((testcase, index) => {
    const result = selectionSort(testcase.input1);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
