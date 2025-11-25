import { reverseVowels } from "./task7";
function testCases(){
    const testcases = [
        {
            input: "helloEverybody",
            output: 5
        },
        {
            input: "",
            output: 0
        },
        {
            input: "array",
            output: 2
        },
        {
            input: "hsdfn",
            output: 0
        },
        {
            input: "aeiou",
            output: 5
        },
        {
            input: "goodmorning",
            output: 4
        },
         {
            input: "thrshld",
            output: 0
        }
    ]
  testcases.forEach((testcase, index) => {
    const result = reverseVowels(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
      Got Result: ${result}`);
    }
  });
}
testCases();
