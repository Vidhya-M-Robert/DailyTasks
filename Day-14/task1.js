function removeFalsy(arr){
    let removeFalsyArray = []
    if(!Array.isArray(arr)){
        return "Invalid";
    }
    if(arr.length === 0 || arr === ""){
        return "Invalid";
    }
    for(let i=0;i<arr.length;i++){
        let bool = Boolean(arr[i])
       if(bool === true){
            // console.log(arr[i])
            removeFalsyArray.push(arr[i]);
       }
    }
    return removeFalsyArray
}
// console.log(removeFalsy([-8,0,-10,null,"hello"]));

function testCases(){
    const testcases = [
        {
            input: [false,null,NaN],
            output: []
        },
        {
            input: [54, false, null, 9, "HI", 0],
            output: [ 54, 9, 'HI' ]
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
            input: ["1","2","3"],
            output: [ '1', '2', '3' ]
        },
        {
            input: [100,0,309,NaN,500],
            output: [ 100, 309, 500 ]
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
            input: [-8,0,-10,null,"hello"],
            output: [ -8, -10, 'hello' ]

        },
        {
            input: {},
            output: "Invalid"

        },
        {
            input: [-2,'',6,-8,'',-10],
            output: [ -2, 6, -8, -10 ]

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
            input: ["Hi",23,90,"hello"],
            output: [ 'Hi', 23, 90, 'hello' ]

        },
        {
            input: [2,8,3][4,3,1],
            output: "Invalid"

        },
    ]
testcases.forEach((testcase,index) =>{
    let outputOriginal = removeFalsy(testcase.input)
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
