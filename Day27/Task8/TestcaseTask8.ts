import { ObjtoQuery } from "./task8";
function testCases() {
  const testcases = [
    {
      input: {name:"John", age:30},
      output:"name = John&age = 30",
    },
    {
      input: {age:40, name:"Harry"},
      output:"age = 40&name = Harry",
    },
    {
      input: {age:40, name:"Harry",place:"wayanad"},
      output:"age = 40&name = Harry&place = wayanad",
    },
    {
      input: {name:"John"},
      output:"name = John",
    },
    {
      input: {},
      output:"Invalid",
    },
  ];

  testcases.forEach((testcase, index) => {
    const result = ObjtoQuery(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();