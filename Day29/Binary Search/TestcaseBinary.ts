import { BinarySearch } from "./binary";
function testCases() {
  const testcases = [
    {
      input1: [2,34,24,72,46,8],
      input2: 22,
      output: "Not Found"
    },
    {
      input1: [2,34,24,72,46,8],
      input2: 46,
      output: 4
    },
    {
      input1: [],
      input2: 11,
      output: "Not Found"
    },
    {
      input1: [46,46,46,46],
      input2: 46,
      output: 0
    },
    {
      input1: [2,34,24,72,46,8],
      input2: 8,
      output: 5
    },
  ];
  testcases.forEach((testcase, index) => {
    const result = BinarySearch(testcase.input1,testcase.input2);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
