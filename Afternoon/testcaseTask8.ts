import { isEven } from "./task8";
function testCases(){
const testcases = [
    {
        input: 1000,
        output: "1000 is an Even Number"
    },
    {
        input: -2,
        output: "Invalid"
    },
    {
        input: 9,
        output: "9 is not an Even Number"
    },
    {
        input: 13.5,
        output: "Invalid"
    },
     {
        input: 4,
        output: "4 is an Even Number"
    },
     {
        input: -34,
        output: "Invalid"
     },
     {
        input: 1024,
        output: "1024 is an Even Number"
    },
     {
        input: 10000257,
        output: "10000257 is not an Even Number"
     },
    {
        input: 92.756,
        output: "Invalid"
     },
];
    testcases.forEach((testcase,index)=>{
        const result = isEven(testcase.input);
        const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log(`Testcase ${index+1}: ${passed ? "Pass":"Fail"}`);
        if(!passed){
            console.log(`Expected result: ${testcase.output}\n
                Got Result: ${result}`)
        }
    })
}
testCases();