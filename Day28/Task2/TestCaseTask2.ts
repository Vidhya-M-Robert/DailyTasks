import { rotatesArray } from "./Task2";
function testCases() {
  const testcases = [
    {
      input: [1,2,3,4,5],
      input2: 3,
      output: [ 3, 4, 5, 1, 2 ],
    },
    {
      input: [1,2,3,4,5],
      input2: 2,
      output: [ 4, 5, 1, 2, 3 ],
    },
    {
      input: [1,2,3,4,5],
      input2: 1,
      output: [5, 1, 2, 3, 4],
    },
    {
      input: [1,2,3,4,5],
      input2: 5,
      output: [ 1, 2, 3, 4, 5 ],
    },
    {
      input: [1,2,3,4,5],
      input2: 0,
      output: [ 1, 2, 3, 4, 5 ],
    },
  ];
  testcases.forEach((testcase, index) => {
    const result = rotatesArray(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
