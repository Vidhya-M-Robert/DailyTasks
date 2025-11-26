import { celsiustoFahrenheit } from "./Task1";
function testCases() {
  const testcases = [
    {
      input: 40,
      output: 104,
    },
    {
      input: 100,
      output: 212,
    },
    {
      input: 78.6,
      output: 173.48,
    },
    {
      input: 0,
      output: 32,
    },
    {
      input: 37.7778,
      output: 100.00004,
    },
    
  ];
  testcases.forEach((testcase, index) => {
    const result = celsiustoFahrenheit(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
