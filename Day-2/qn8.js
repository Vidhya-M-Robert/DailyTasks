function MissingConsecutiveNumber(arr){
    if(!Array.isArray(arr)){
        return "Invalid";
    }
    if(arr.length === 0 || arr === ""){
        return "Invalid";
    }

    for(let i=0; i < arr.length-1;i++){
    if (typeof arr[i] !== "number" || typeof arr[i + 1] !== "number" || isNaN(arr[i])) {
            return "Invalid";
    }
        if(arr[i+1]-arr[i] > 2){
            return "Numbers are not Consecutive"
        }
        if(arr[i]+1 !== arr[i+1]){
            return arr[i]+1;
        }
    }
}
MissingConsecutiveNumber([1, 2, 3, 5, 6]);
function testCases(){
    const testcase = [
        {
            input:[1, 2, 3, 5, 6],
            output: 4

        },
        {
            input: [],
            output:'Invalid'

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
            input: [1, 2, 3, 4, 5, 6, 7, 8, 10],
            output: 9

        },
        {
            input: [1,, ,2, 3, 4, 6],
            output:  "Invalid"
        },
        {
            input: (false,true,null),
            output: "Invalid"
        },
        {
            input: null,
            output: "Invalid"

        },
        {
            input: {},
            output: "Invalid"

        },
        {
            input: [0,1,3,4],
            output: 2

        },
        {
            input: (2, "hello", 6, "hey", 10),
            output: "Invalid"

        },
        {
            input: (2, "error", {name: "harry"},8, 10),
            output: "Invalid"
        },
        {
            input: [2.5,4.5,5.5,6.5,7.5],
            output: 3.5

        },
        {
            input: [10,20,30,40,50],
            output: "Numbers are not Consecutive"

        },
        {
            input: [2,8,3][4,3,1],
            output: "Invalid"

        },
    ]
for(let i=0;i<testcase.length;i++){
    const test=testcase[i]
    const result = MissingConsecutiveNumber(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.output);
    console.log(`Test ${i+1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.output);
      console.log("Got:", result);
    }
  }
}
testCases();
