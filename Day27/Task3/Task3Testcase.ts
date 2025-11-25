import { ifArmstrong } from "./task3";
function testCases() {
  const testcases = [
    {
      input: 153,
      output: true,
    },
    {
      input: 876,
      output: false,
    },
    {
      input: -23,
      output: "Invalid Entry",
    },
    {
      input: 9474,
      output: true,
    },
    {
      input: 56.98,
      output: "Invalid Entry",
    },
    {
      input: 388,
      output: false,
    },
  ];

  testcases.forEach((testcase, index) => {
    const result = ifArmstrong(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
