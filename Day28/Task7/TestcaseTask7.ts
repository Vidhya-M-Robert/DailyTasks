import { urlQuerytoParams } from "./Task7";
function testCases() {
  const testcases = [
    {
      input: "?name=John&age=20&active=true",
      output: {name: 'John', age: '20', active: 'true'},
    },
    {
      input: "?name=John",
      output: "Invalid",
    },
    {
      input: "true?",
      output: "Invalid",
    },
    {
      input: "name=John&age=20",
      output: {name: 'John', age: '20'},
    },
    {
      input: "?name=John&&age=20",
      output: "Invalid",
    },
  ];
  testcases.forEach((testcase, index) => {
    const result = urlQuerytoParams(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
