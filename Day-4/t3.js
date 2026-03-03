function invertKeyValues(obj){
    let newObj = {};
    if(typeof(obj) !== "object" || Array.isArray(obj) || obj === null){
        return "Invalid"
    }
    if(obj === "" || obj === null){
        return "Empty"
    }
    const newValues = Object.keys(obj);
    if(newValues.length === 0){
        return "Invalid"
    }
    const newKeys = Object.values(obj);
    for(let i =0; i< newKeys.length;i++){
        newObj[newKeys[i]] = newValues[i];

    }
    console.log(newObj);
    return newObj
};

// invertKeyValues({1: "hello",2:"hey"});

function testCase(){
    const testcases = [
        {
            input: { a: 1, b: 2 },
            output: { '1': 'a', '2': 'b' }

        },
        {
            input: null,
            output: "Invalid"
        },
        {
            input: 246,
            output: "Invalid"

        },
        {
            input: true,
            output: "Invalid"
        },
        {
            input: "246",
            output: "Invalid"

        },
        {
            input: { a: 9, b: 0, c:8 },
            output: { '0': 'b', '8': 'c', '9': 'a' }
        },
        {
            input: undefined,
            output: "Invalid"
        },
        {
            input: {},
            output: "Invalid"
        },
        {
            input: {1: "hello",2:"hey"},
            output: { hello: '1', hey: '2' }
        },
        {
            input: ["hello","a","10"],
            output: "Invalid"
        },

    ];
   testcases.forEach((testcase,index) =>{
        const outputOriginal = invertKeyValues(testcase.input);
        let status = "Pass";
        if(typeof outputOriginal === "string"){
            status = outputOriginal === testcase.output ? "Pass" : "Fail"
        }
        if(typeof outputOriginal !== 'string' && Array.isArray(outputOriginal) && typeof outputOriginal !== "number" || typeof outputOriginal !== "boolean"){
            const keys1 = Object.keys(testcase.output);
            const keys2 = Object.keys(outputOriginal);
            if(keys1.length !== keys2.length){
                status = "Fail"
            }
            else{
                for(let key of keys1){
                    if(outputOriginal[key] !== testcase.output[key]){
                        status = "Fail";
                        break;
                    }
                }
            }
        }
        if(Array.isArray(outputOriginal)){
            if(outputOriginal.length === testcase.output.length){
                for(let i = 0; i< outputOriginal.length;i++){
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
        let show = `
        Testcase ${index + 1} ${status}
        Expected : ${testcase.output}
        Got: ${outputOriginal}`
        console.log(show)
    })
}
testCase();
