import { objectstoSingleObject } from "./Task3";
function testCases() {
  const testcases = [
    {
      input: [{key: "a", value: 1}, {key: "b", value: 2}],
      output: { a: 1, b: 2 },
    },
    {
      input: [{key: 1, value: "hello"}, {key: 2, value: "hai"}],
      output: { '1': 'hello', '2': 'hai' },
    },
    
  ];
  testcases.forEach((testcase, index) => {
    const result = objectstoSingleObject(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
