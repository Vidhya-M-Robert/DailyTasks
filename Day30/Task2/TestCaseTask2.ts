import { SieveEratosthenes } from "./Task2";
function testCases(){
    const testcases = [
        {
            input: 20,
            output: [
   2,  3,  5,  7, 11, 13, 17,
  19, 23, 29, 31, 37, 41, 43,
  47, 53, 59, 61, 67, 71
]
        },
        {
            input: 10,
            output: [
   2,  3,  5,  7, 11,
  13, 17, 19, 23, 29
]
        },
        {
            input: 50,
            output: [
    2,   3,   5,   7,  11,  13,  17,  19,  23,  29,
   31,  37,  41,  43,  47,  53,  59,  61,  67,  71,
   73,  79,  83,  89,  97, 101, 103, 107, 109, 113,
  127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
  179, 181, 191, 193, 197, 199, 211, 223, 227, 229
]
        },
    ];
    testcases.forEach((testcase,index)=>{
        const result = SieveEratosthenes(testcase.input);
        const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log(`Testcase ${index + 1}: ${passed ? "Pass":"Fail"}`);
        if(!passed){
            console.log(`Expected result: ${testcase.output}\n
                Got result: ${result}`);
        }
    });
}
testCases()