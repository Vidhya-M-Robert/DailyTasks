import { findDuplicate } from "./task1";
function testCases() {
  const testcases = [
    {
      input: [1,2,2,3,3,3,4],
      output: [ 1, 2, 3, 4 ],
    },
    {
      input: [1,1,1,1],
      output: [ 1 ],
    },
    {
      input: [],
      output: "Invalid",
    },
    {
      input: [ 1, 2, 3, 4 ],
      output: [ 1, 2, 3, 4 ],
    },
    {
      input: ["1",2,2,"3","3",3,4],
      output: "Invalid",
    },
    {
      input: [1,1,1,1,3,4],
      output: [ 1, 3, 4 ],
    },
    {
      input: [3],
      output: [ 3 ]
    },
    {
      input: [1,1,1,1,3,4],
      output: [ 1, 3, 4 ],
    }
  ];

  testcases.forEach((testcase, index) => {
    const result = findDuplicate(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
                Got Result: ${result}`);
    }
  });
}
testCases();
