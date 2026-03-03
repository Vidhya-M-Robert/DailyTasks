function SortBysum(arr: number[][]):string | (number)[]{
    if(!Array.isArray(arr)){
        return "Invalid";
    }
    let sumArr: number[] =[];
    let result: number[] = [];
    let sorted: number[];
    for(let i=0;i<arr.length;i++){
        let sum = arr[i].reduce((acc,curr)=>acc+curr);
        sumArr.push({sumValue:sum, arrr:arr[i]});
        sorted = sumArr.sort((a,b) => b.sumValue - a.sumValue);
     }
         for(let j=0;j<sorted.length;j++){
            result.push(sorted[j].arrr);
       }
    return result
}
console.log(SortBysum([[1,2,3],[4],[2,7]]));


function testCases(){
    const testcases = [
        {
            input: [[1,2,3],[4],[2,7]],
            output: [ [ 2, 7 ], [ 1, 2, 3 ], [ 4 ] ]
        },
        {
            input: "hello",
            output: "Invalid"
        },
        {
            input: [[1,2,3],[4],[2,4]],
            output: [ [ 1, 2, 3 ], [ 2, 4 ], [ 4 ] ]
        },
        {
            input: true,
            output: "Invalid"
        },
        {
            input: [[4,2,1],[1,2,4]],
            output: [ [ 4, 2, 1 ], [ 1, 2, 4 ] ]
        },
        {
            input: [[1,2,-3],[4]],
            output: [ [ 4 ], [ 1, 2, -3 ] ]
        },
        {
            input: "[[3,7,4],[7,8,2]]",
            output: "Invalid"
        },
        {
            input: {},
            output: "Invalid"
        },
        {
            input: [[-1,-2,3],[-4],[-2,-7]],
            output: [ [ -1, -2, 3 ], [ -4 ], [ -2, -7 ] ]
        },
        {
            input: [[2,2,2],[3,3],[1,1,1,1,1,1],[-1]],
            output: [ [ 2, 2, 2 ], [ 3, 3 ], [ 1, 1, 1, 1, 1, 1 ], [ -1 ] ]
        },
        {
            input: "",
            output: "Invalid"
        },
        {
            input: [[2,2,2],[2,2,2]],
            output: [ [ 2, 2, 2 ], [ 2, 2, 2 ] ]
        },
        {
            input: [[24,2,4],[-2,34,2]],
            output: [ [ -2, 34, 2 ], [ 24, 2, 4 ] ]
        },
    ];
    for(let i=0;i<testcases.length;i++){
        const test = testcases[i];
        const result = SortBysum(test.input);
        const passStatus = JSON.stringify(result) === JSON.stringify(test.output);
        console.log(`Test ${i+1}:`,passStatus ? "Pass": "Fail");
        if(!passStatus){
            console.log("Expected output:", test.output);
            console.log("Output Got:",result);
        }
    }
}
testCases();