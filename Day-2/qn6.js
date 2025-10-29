function sumOfDivisiblebyThree(list){
    let output = [];
    if(!Array.isArray(list)){
        return "Invalid";
    }
    if(list.length === 0 || list === ""){
        return "Invalid";
    }
    for(let i=0; i < list.length; i++){
        if(list[i] % 3 === 0){
            output.push(list[i]);   
        }
    }
    let sum = output.reduce((curr,acc) => curr+acc,0)
    return sum
}
// console.log(sumOfDivisiblebyThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(sumOfDivisiblebyThree([10,20,30,40,50]));
// console.log(sumOfDivisiblebyThree([15, 25, 35, 45, 55]));

function testCases(){
    const testcases = [
        {
            input: [15, 25, 35, 45, 55],
            output: 60

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
            input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            output: 18

        },
        {
            input: [15,, ,25, 35, 45, 55],
            output:  60
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
            input: [-2,4,-6,18,-10],
            output: 12

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
            output: 0

        },
        {
            input: [10,20,30,40,50],
            output: 30

        },
        {
            input: [2,8,3][4,3,1],
            output: "Invalid"

        },
    ]
testcases.forEach((testcase,index) =>{
    let outputOriginal = sumOfDivisiblebyThree(testcase.input)
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