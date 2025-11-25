import { ifSorted } from "./task9";
function testCases() {
  const testcases = [
    {
      input: [11,2,14,5,6],
      output: "Not Sorted",
    },
    {
        input: [2,3,4,5,6],
        output: "Ascending",
    },
    {
        input: [6,4,3,2,1],
        output: "Descending"
    },
    {
        input: [24,12,12,12,12],
        output: "Descending",
    },
    {
        input: [12,65,87,98,24],
        output: "Not Sorted"
    }    
  ];

  testcases.forEach((testcase, index) => {
    const result = ifSorted(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
                Got Result: ${result}`);
    }
  });
}
testCases();
