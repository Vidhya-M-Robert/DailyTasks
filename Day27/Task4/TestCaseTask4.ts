import { snakeTocamel } from "./snakeTocamel";
function testCases() {
  const testcases = [
    {
      input: "hello_world_from_js",
      output: "helloWorldFromJs",
    },
    {
      input: "hello",
      output: "hello",
    },
    {
      input: "hello_world",
      output: "helloWorld",
    },
    {
      input: "",
      output: "Invalid",
    },
  ];

  testcases.forEach((testcase, index) => {
    const result = snakeTocamel(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
