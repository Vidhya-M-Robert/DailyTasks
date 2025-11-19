import { parseStringtoObject } from "./task2";
function testCases() {
  const testcases = [
    {
        input: "name=Harry&age=20&place=wayand",
        output: { name: 'Harry', age: '20', place: 'wayand' }
    },
    {
        input: "",
        output: "Invalid"
    },
    {
        input: "name=John&age=20",
        output: { name: 'John', age: '20' }
    },
    {
        input: "slavia",
        output: "Invalid"
    },
    {
        input: "maserati=ghibli&toyota=supra",
        output: { maserati: 'ghibli', toyota: 'supra' }
    },
    {
        input: "hyryder&vitara",
        output: "Invalid"
    },
     {
        input: "hyryder=toyota vitara=suzuki",
        output: "Invalid"
    },
    {
        input: "hello:world",
        output: "Invalid"
    },
    {
        input: "hello&&world",
        output: "Invalid"
    }
  ];
  testcases.forEach((testcase, index) => {
    const result = parseStringtoObject(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
                Got Result: ${result}`);
    }
  });
}
testCases();