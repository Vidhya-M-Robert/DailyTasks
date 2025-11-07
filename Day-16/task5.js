function minimumPath(matrix){
    if(!Array.isArray(matrix) || matrix.length === 0){
        return "Invalid";
    }
    for(let i=0; i<matrix.length;i++){
        if(!Array.isArray(matrix[i]) || matrix[i].length !== i+1){
            return "Invalid";
        }
    }
    let sum=0;
    for(let i=0;i<matrix.length;i++){
        let min = matrix[i][0]
        for(let j=1;j<matrix[i].length;j++){
            if(matrix[i][j] < min){
                min = matrix[i][j];
            }
        }
        sum = sum+min;
    }
    return sum
}
// console.log(minimumPath([[2],[3,4],[6,5,7],[4,1,8,3]]));
// console.log(minimumPath([[4],[2,1,4],[7,8,2,6]]));


function testCases(){
    const testcases = [
        {
            input: [[2],[3,4],[6,5,7],[4,1,8,3]],
            output: 11
        },
        {
            input: [3,14,62,3,62,14],
            output:"Invalid"

        },
        {
            input: "",
            output: "Invalid"

        },
        {
            input: (2, 4, 6, 8, 10),
            output: "Invalid"

        },
        {
            input: [[5], [9, 3]],
            output: 8
         },
         {
            input: "hello",
            output: "Invalid"
        },
        {
            input: [],
            output: "Invalid"
        },
        {
            input: [[-5], [-2, -3], [-4, -6, -1]],
            output: -14,
        },
         {
            input: [[2], "hello", [4, 5, 6]],
            output: "Invalid"
        },
        {
            input: [[1.2], [3.5, 2.1], [4.6, 1.1, 5.8]],
            output: 4.4
        },
        {
            input: [[9]],
            output: 9
        },
        {
            input: [[1], [2, 3,5], [4, 6], [7, 8, 9]],
            output: "Invalid",
        },
        {
            input: true,
            output: "Invalid",
        },
        {
            input: [[1], [1, 1], [1, 1, 1]],
            output: 3 
        },
        {
            input: {},
            output: "Invalid"
        }       
    ]
testcases.forEach((testcase,index) =>{
    let outputOriginal = minimumPath(testcase.input)
    let status = "pass"
    status = outputOriginal === testcase.output ? "Pass" : "Fail"
    let show = `
    Testcase ${index+1} ${status}
    Expected: ${testcase.output}
    Got:${outputOriginal}
    `
    console.log(show)
})
}
testCases();