import { EuclideanAlgo } from "./Task1";
function testCases(){
    const testcases = [
        {
            input1: 33,
            input2: 18,
            output: 3
        },
        {
            input1: 48,
            input2: 18,
            output: 6
        },
        {
            input1: 120,
            input2: 25,
            output: 5
        },
    ];
    testcases.forEach((testcase,index)=>{
        const result = EuclideanAlgo(testcase.input1,testcase.input2);
        const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log(`Testcase ${index + 1}: ${passed ? "Pass":"Fail"}`);
        if(!passed){
            console.log(`Expected result: ${testcase.output}\n
                Got result: ${result}`);
        }
    });
}
testCases()