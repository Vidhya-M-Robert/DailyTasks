function wordFrequency(str){
     if(typeof(str) !== "string"){
        return "Invalid"
    }
    if(str === "" || str === null){
        return "Empty"
    }
    // str = str.replaceAll(/[!@#$%^&*()><?_+.,';/]/g,"");
    // str = str.trim().replace(/\s+/g, "");
    const ignored = /[!@#$%^&*()><?_+.,';/]/g
    let stringTransform = str.replaceAll(ignored,"");
    let lower = stringTransform.toLowerCase();
    // console.log(lower);
    let words = lower.split(" ");
    // console.log(words);
    let count = {};
    for(let word of words){
        count[word] = (count[word] || 0) + 1;
    }
    return count;
}
// console.log(wordFrequency("see !you there you go#"));

function testCases(){
    const testcases = [
        {
            input: "Hello World",
            output: { hello: 1, world: 1 }
        },
        {
            input: "programming",
            output: { programming: 1 }
        },
        {
            input: "",
            output: "Empty"
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
            input: [],
            output: "Invalid"
        },
        {
            input: "Hel.lo!!",
            output: { hello: 1 }
        },
      {
            input: { hello: 2, world: 2 },
            output: "Invalid"
      },
        {
           input: {},
            output: "Invalid"
         },
        {
            input: ["Hello" ,"world"],
            output: "Invalid"
        },
        {
             input: "Hello .!hello",
             output:{ hello: 2 }
        },
         {
             input: "coding is fun",
             output: { coding: 1, is: 1, fun: 1 }
         },
         {
            input: undefined,
            output: "Invalid"
         },
        {
             input: "see !you there you go#",
             output: { see: 1, you: 2, there: 1, go: 1 }
       },
        {
            input: {},
            output: "Invalid"
        }
    ];
    testcases.forEach((testcase,index) =>{
        const outputOriginal = wordFrequency(testcase.input);
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
testCases();


