function integerArray(arr){
    if(!Array.isArray(arr)){
        return "Invalid";
    }
    if(arr.length === 0 || arr === ""){
        return "Invalid";
    }
    let output = [];
    for(let i=0; i < arr.length; i++){
        if(typeof(arr[i]) === "number" &&  Number.isInteger(arr[i])){
   let evenNum = arr.filter(num => num % 2 === 0);
   let oddNum = arr.filter(num => num % 2 !== 0);
   output.push(evenNum,oddNum);
//    console.log(output.flat());
    }
     if(output.length === 0) return []
    return output.flat();
}
}
console.log(integerArray([4, 9, 6.9, 10, 9.8,12]));
function testCases(){
    const testcases = [
        {
            input:[3,2,4,1,5,8],
            output: [ 2, 4, 8, 3, 1, 5 ]
        },
        {
            input:[20,13,23,40,34,17],
            output: [ 20, 40, 34, 13, 23, 17 ]
        },
        {
            input:"",
            output:"Invalid"
        },
         {
            input: (2, 4, 6, 8, 10),
            output: "Invalid"
        },
        {
            input: ("1","2","3"),
            output: "Invalid"
        },
        {
            input: [100,201,309,400,500],
            output: [ 100, 400, 500, 201, 309]
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
            input: [-2,4,6,-8,-10],
            output: [-2,4,6,-8,-10]

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
            input: [4, 9, 6.9, 10, 9.8,12],
            output: [ 4, 10, 12, 9, 6.9, 9.8 ]

        },
        {
            input: [-2,4,6,    ,-8,-10],
            output: [-2,4,6,-8,-10]

        },
        {
            input: [2,8,3][4,3,1],
            output: "Invalid"

        },

    ]
testcases.forEach((testcase,index) =>{
    let outputOriginal = integerArray(testcase.input)
    let status = "pass"
    if(Array.isArray(outputOriginal)){
        if(outputOriginal.length === testcase.output.length){
            // outputOriginal.length === 0 ? status = "Pass" : status = "Fail"
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
