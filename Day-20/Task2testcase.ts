import { AnalyzeHeatmap } from "./Task2";
function testCases(){
    const testcases = [
        {
            input: [[30,32,30],[42,35,40],[33,42,39]],
            output: {maxTemp: 42,minTemp: 30,averageTemp: 35.9,hottestPoint: [ 1, 0 ],coldestPoint: [ 0, 0 ]}
        },
        {
            input: [[]],
            output: "Invalid"
        },
        {
            input: [[31,32],[42,35,40],[33,42,39,30]],
            output: {maxTemp: 42,minTemp: 30,averageTemp: 36,hottestPoint: [ 1, 0 ],coldestPoint: [ 2, 3 ]}
        },
        {
            input: [[],[],[]],
            output: "Invalid"
        },
        {
            input: [[30,32,35],[28,40,33],[31,36,38]],
            output: {maxTemp: 40,minTemp: 28,averageTemp: 33.7,hottestPoint: [ 1, 1 ],coldestPoint: [ 1, 0 ]}
        },
        {
            input: [[20,20,20],[20,20,20]],
            output: {maxTemp: 20,minTemp: 20,averageTemp: 20,hottestPoint: [ 0, 0 ],coldestPoint: [ 0, 0 ]}
        },
        {
            input: [[],[19,48,62]],
            output: "Invalid"
        },
        {
            input: [[28,46],[19,73]],
            output: {maxTemp: 73,minTemp: 19,averageTemp: 41.5,hottestPoint: [ 1, 1 ],coldestPoint: [ 1, 0 ]}
        },
        {
            input: [[28,46,59],[19,73],[32,54,23,32,52],[7,43]],
            output: {maxTemp: 73,minTemp: 7,averageTemp: 39,hottestPoint: [ 1, 1 ],coldestPoint: [ 3, 0 ]}
        },
         {
            input: [[28,46,59],[]],
            output: "Invalid"
        },
   ];
  testcases.forEach((testcase, index) => {
    const result = AnalyzeHeatmap(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase Number ${index + 1}: ${passed ? "PASS" : "FAIL"}\n`);
    console.log("Expected Output:", testcase.output);
    console.log("Gotted Output:", result);
  });
}
testCases();