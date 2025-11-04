function sortInAscending(arr){
     if(!Array.isArray(arr)){
        return "Invalid";
    }
    if(arr.length === 0 || arr === ""){
        return "Invalid";
    }
    for(let i = 0; i < arr.length;i++){
    for(let j = 0; j<arr.length;j++){
            if(arr[j] > arr[j+1]){
            let swap = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = swap ;
        }
    }
}
    return arr;
}
console.log(sortInAscending([1,2,3,4,5,6]));

function testCases(){
    const testcases = [
        {
            input: [5, 4, 1, 2, 3],
            output: [ 1, 2, 3, 4, 5 ]

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
            input: {2:'hello', 4:"hey", 6:"here", 8:"there"},
            output: "Invalid"

        },
        {
            input: [17, 3, 48, 6, 69, 70, 85, 91, 22,14],
            output: [ 3,  6, 14, 17, 22, 48, 69, 70, 85, 91]

        },
        {
            input: false,
            output:  "Invalid"
        },
        {
            input: [1,2,3,4,5,6],
            output: [ 1, 2, 3, 4, 5, 6 ]
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
            input: [-2,4,-6,18,-10],
            output: [ -10, -6, -2, 4, 18 ]

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
            input: [2.5, 4, 6.7, 10,9.9],
            output: [ 2.5, 4, 6.7, 9.9, 10 ]

        },
        {
            input: ("10","20","30","40","50"),
            output: "Invalid"

        },
        {
            input: [2,8,3][4,3,1],
            output: "Invalid"

        },
    ]
testcases.forEach((testcase,index) =>{
    let outputOriginal = sortInAscending(testcase.input)
    let status = "pass"
    if(Array.isArray(outputOriginal)){
        if(outputOriginal.length === testcase.output.length){
            for(let i=0; i<outputOriginal.length;i++){
                if(outputOriginal[i] !== testcase.output[i]){
                    status = "Fail"
                    break;
                }
            }
        }
        else{
            status = "Fail"
        }
    }
    else{
       status = outputOriginal === testcase.output ? "Pass" : "Fail"
    }
    let show = `
    Testcase ${index+1} ${status}
    Expected: ${testcase.output}
    Got:${outputOriginal}
    `
    console.log(show)
})
}
testCases();