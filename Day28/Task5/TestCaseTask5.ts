import { CalculateSum } from "./Task5";
function testCases() {
  const testcases = [
    {
      input: [1,2,3,2,1],
      output: 3,
    },
    {
      input: [1,1,1,1,1],
      output: 0,
    },
    {
      input: [1,2,3,2],
      output: 4,
    },
    {
      input: [1,2,3,4,5],
      output: 15,
    },
    {
      input: [1,1,2,6,7,2,7],
      output: 6,
    },
    
  ];
  testcases.forEach((testcase, index) => {
    const result = CalculateSum(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
