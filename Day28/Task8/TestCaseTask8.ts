import { replaceDigits } from "./Task8";
function testCases() {
  const testcases = [
    {
      input: "Room 45 on floor 3",
      output: "Room ## on floor #",
    },
    {
      input: "2343",
      output: "####",
    },
    {
      input: "234 45 on floor 3",
      output: "### ## on floor #",
    },
    {
      input: "Room on  the floor",
      output:"Room on  the floor",
    },
    {
      input: "",
      output:"Invalid",
    },
    
  ];
  testcases.forEach((testcase, index) => {
    const result = replaceDigits(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
