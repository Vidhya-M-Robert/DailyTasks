import { BubbleSort } from "./bubble";
function testCases() {
  const testcases = [
    {
      input1: [24,3,72,59,34],
      output: [ 3, 24, 34, 59, 72 ]
    },
    {
      input1: [2,4,27,34,76],
      output: [ 2, 4, 27, 34, 76 ]
    },
    {
      input1: [2,2,2,2,2],
      output: [ 2, 2, 2, 2, 2 ],
    },
    {
      input1: [],
      output: "Invalid",
    },
    {
      input1: [92,63,42,29,12],
      output: [ 12, 29, 42, 63, 92 ]
    },
  ];
  testcases.forEach((testcase, index) => {
    const result = BubbleSort(testcase.input1);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
