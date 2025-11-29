import { AnalyzeHeatmap } from "./task1";
function testCases(){
    const testcases = [
        {
            input: [[30,32,35],[28,40,33],[31,36,38]],
            output: { maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0] }

        },
        {
            input: [[30,30,30],[30,30,30],[30,30,30]],
            output: { maxTemp: 30, minTemp: 30, averageTemp: 30, hottestPoint: [ 0, 0 ], coldestPoint: [ 0, 0 ] }
        },
        {
            input: [[58,32,35],[28,58,33],[31,58,38]],
            output: { maxTemp: 58, minTemp: 28, averageTemp: 41.2, hottestPoint: [ 0, 0 ], coldestPoint: [ 1, 0 ] }
        },
        {
            input: [[92,42,93],[10,15,107],[92,10,120]],
            output: { maxTemp: 120, minTemp: 10, averageTemp: 64.6, hottestPoint: [ 2, 2 ], coldestPoint: [ 1, 0 ] }
        },
    ];
    testcases.forEach((testcase,index)=>{
        const result = AnalyzeHeatmap(testcase.input);
        const output = testcase.output;
        const passed = JSON.stringify(result) === JSON.stringify(output);
        const pass = `Test ${index+1}: ${passed ? "Passed":"Fail"}`
        console.log(pass);
    })
}
testCases();