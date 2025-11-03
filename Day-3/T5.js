function NumberofArguments(...restPara) {
    if (restPara.length === 0) return "Invalid";

    for (let val of restPara) {
        if (typeof val !== "number" || isNaN(val)) {
            return "Invalid";
        }
    }

    let sum = restPara.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

function testCases(){
    const testcases = [
        {
            input: [1, 2, 3, 4],
            output: 10
        },
        {
            input: [1,2],
            output: 3
        },
        {
            input: [""],
            output: "Invalid"
        },
        {
            input: [],
            output: "Invalid"
        },
        {
            input: ["1","2","3"],
            output: "Invalid"
        },
        {
            input: [100,201,309,400,500],
            output: 1510
        },
        {
            input: [(false,true,null)],
            output: "Invalid"
        },
        {
            input: [null],
            output: "Invalid"

        },
        {
            input: [{}],
            output: "Invalid"

        },
        {
            input: [-2,4,6,-8,-10],
            output: -10

        },
        {
            input: [(2, "hello", 6, "hey", 10)],
            output: "Invalid"

        },
        {
            input: [(2, "error", {name: "harry"},8, 10)],
            output: "Invalid"

        },
        {
            input: [2.5, 4, 6.9, 10],
            output: 23.4

        },
        {
            input: [-2,4,6,    -8,-10],
            output: -10

        },
        {
            input: [[2,8,3],[4,3,1]],
            output: "Invalid"

        },
    ]
testcases.forEach((testcase,index) =>{
    let outputOriginal = NumberofArguments(...testcase.input)
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


// testcases.forEach((testcase, index) => {
//     let outputOriginal;
//     if (!Array.isArray(testcase.input)) {
//         outputOriginal = NumberofArguments(testcase.input);
//     } else {
//         outputOriginal = NumberofArguments(...testcase.input);
//     }

//     let status = outputOriginal === testcase.output ? "Pass" : "Fail";
//     console.log(`
//     Testcase ${index+1}: ${status}
//     Expected: ${testcase.output}
//     Got: ${outputOriginal}
//     `);
// });
