import { linearSearch } from "./linear";
function testCases() {
  const testcases = [
    {
      input1: [12,8,16,11,24],
      input2: 16,
      output: 2
    },
    {
      input1: [12,8,16,11,24],
      input2: 6,
      output: "Element Not Found"
    },
    {
      input1: [12,11,16,11,24],
      input2: 11,
      output: 1,
    },
    {
      input1: [12,8,16,11,24],
      input2: 12,
      output: 0,
    },
    {
      input1: [12,8,16,11,24],
      input2: 39,
      output: "Element Not Found"
    },
  ];
  testcases.forEach((testcase, index) => {
    const result = linearSearch(testcase.input1,testcase.input2);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
