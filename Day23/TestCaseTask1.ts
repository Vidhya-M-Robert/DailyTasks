import { rotateMatrix } from "./task1";
function testCases() {
  const testcases = [
    {
        input: [[1,2,3],[4,5,6],[7,8,9]],
        output: [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
    },
    {
        input: [[4,5,6],[7,8,9]],
        output: [ [ 7, 4 ], [ 8, 5 ], [ 9, 6 ] ]
    },
    {
        input: [[3,6],[4,2],[7,9]],
        output: [ [ 7, 4, 3 ], [ 9, 2, 6 ] ]
    },
    {
        input: [[3,6],[4,2,0],[7,9,3]],
        output: "Invalid"
    },
    {
        input: [[4,2,6],[7,9,3]],
        output: [ [ 7, 4 ], [ 9, 2 ], [ 3, 6 ] ]
    },
    {
        input: [[],[4,2,6],[7,9,3]],
        output: "Invalid"
    },
    {
        input: [[2,3],[4,6],[7,3]],
        output: [ [ 7, 4, 2 ], [ 3, 6, 3 ] ]
    },
    {
        input: [[9,8,4,8,4],[4,2,6],[9,3]],
        output: "Invalid"
    },
    {
        input: [[3,6,9,2],[4,2,2,6],[1,7,9,3]],
        output: [ [ 1, 4, 3 ], [ 7, 2, 6 ], [ 9, 2, 9 ], [ 3, 6, 2 ] ]
    },
    {
        input: [[],[],[]],
        output: "Invalid"
    },
  ];
  testcases.forEach((testcase, index) => {
    const result = rotateMatrix(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`Testcase ${index + 1}: ${passed ? "Pass" : "Fail"}`);
    if (!passed) {
      console.log(`Expected result: ${testcase.output}\n
                Got Result: ${result}`);
    }
  });
}
testCases();
