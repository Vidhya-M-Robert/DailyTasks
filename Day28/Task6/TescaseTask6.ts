import { commonKeys } from "./task6";
function testCases() {
  const testcases = [
    {
      input1: {name: "Brad", age: "25"},
      input2: {name: "Titan", place: "mars"},
      output: [ 'name' ],
    },
    {
      input1: {place: "mars", age: "25"},
      input2: {name: "Titan", place: "mars"},
      output: [ 'place' ],
    },
    {
      input1: {name: "Brad", age: "25"},
      input2: {brand: "Titan", place: "mars"},
      output: [],
    },
    {
      input1: {name: "Brad", name: "harry"},
      input2: {name: "Titan", name: "mars"},
      output: [ 'name' ],
    },
    {
      input1: {name: "Brad", age: "25"},
      input2: {age: "89", age: "45"},
      output: [ 'age' ],
    },

  ];
  testcases.forEach((testcase, index) => {
    const result = commonKeys(testcase.input1,testcase.input2);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
