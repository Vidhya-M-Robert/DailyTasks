function EvenOnly(list){
    let output = [];
    if(!Array.isArray(list)){
        return "Invalid";
    }
    if(list.length === 0 || list === ""){
        return "Invalid";
    }
    for(let i=0; i < list.length; i++){
        if(typeof(list[i]) === "number" &&  Number.isInteger(list[i])){
            if(list[i] % 2 === 0){
                output.push(list[i]); 
            }
        }
    }
    if(output.length === 0) return []
    return output
}
// console.log(EvenOnly([100,200,300,400,500]));
// console.log(EvenOnly([7, 8, 9, 10, 11, 12]));
// console.log(EvenOnly([-2,4,6,-8,-10]));

function testCases(){
    const testcases = [
        {
            input: [2,4,6,8,10],
            output: [ 2, 4, 6, 8, 10 ]
        },
        {
            input: [1,3,5,7,9],
            output: "Invalid"
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
            output: "Invalid"
        },
        {
            input: [100,201,309,400,500],
            output: [ 100, 400, 500]
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
            input: [2.5, 4, 6.9, 10],
            output: [4,10]

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
// for(let i=0;i<testcase.length;i++){
//     const test=testcase[i]
//     const result = EvenOnly(test.input);
//     const passed = JSON.stringify(result) === JSON.stringify(test.output);
//     console.log(`Test ${i+1}:`, passed ? "Pass" : `Fail`);
//     if (!passed) {
//       console.log("Expected:", test.output);
//       console.log("Got:", result);
//     }
//   }
testcases.forEach((testcase,index) =>{
    let outputOriginal = EvenOnly(testcase.input)
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
