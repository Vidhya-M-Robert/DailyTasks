function frequencyOfCharacters(str){
    if(typeof(str) !== "string"){
        return "Invalid"
    }
    if(str === "" || str === null){
        return "Empty"
    }
    str = str.replaceAll(/[!@#$%^&*()><?_+.,';/]/g,"");
    str = str.trim().replace(/\s+/g, "");
   let words = str.split("").join("").toLowerCase();
    let count= {};
    for(let word of words){
        count[word] = (count[word] || 0) + 1;
    }
   return count;
}
// console.log(frequencyOfCharacters());

function testCases(){
    const testcases = [
        {
            input: "hello",
            output: { h: 1, e: 1, l: 2, o: 1 }
        },
        {
            input: "programming",
            output: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }
        },
        {
            input: "",
            output: "Empty"
        },
        {
            input: "Hello World",
            output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
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
            input: "Hello   .",
            output: { h: 1, e: 1, l: 2, o: 1 }
        },
        {
            input: { h: 1, e: 1, l: 2, o: 1 },
            output: "Invalid"
        },
        {
            input: "wor!d",
            output: { w: 1, o: 1, r: 1, d: 1 }
        },
        {
            input: ["Hello" ,"world"],
            output: "Invalid"
        },
        {
            input: "Hello.hello",
            output:{ h: 2, e: 2, l: 4, o: 2 }
        },
        {
            input: "coding",
            output: { c: 1, o: 1, d: 1, i: 1, n: 1, g: 1 }
        },
        {
            input: "cc",
            output: { c: 2 }
        },
        {
            input: {},
            output: "Invalid"
        }
    ];
    testcases.forEach((testcase,index) =>{
        const outputOriginal = frequencyOfCharacters(testcase.input);
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


