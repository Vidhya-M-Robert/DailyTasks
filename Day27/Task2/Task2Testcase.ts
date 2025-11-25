import { mostFrequent } from "./task2";
function testCases() {
  const testcases = [
    {
      input: [1,2,2,3,3,3,4],
      output: 3,
    },
    {
      input: [1,1,1,1],
      output: 1,
    },
    {
      input: [],
      output: "Invalid",
    },
    {
      input: [1,3,4,4,4],
      output: 4,
    },
    {
      input: [8],
      output:8
    },
    {
      input: [1,2,3,2,4,5,2,3],
      output:2,
    }
  ];

  testcases.forEach((testcase, index) => {
    const result = mostFrequent(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
                Got Result: ${result}`);
    }
  });
}
testCases();
