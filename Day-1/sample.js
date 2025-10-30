//     arr = arr.filter((str) => typeof str === "string" && str.trim() !== "");
//   arr = arr.map((str) => str.replaceAll(/[ ]/g, "").toLowerCase());


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




function longestWord(list){
    let longest = ""
    if(!Array.isArray(list)){
        return "Invalid";
    }

   
    const originalLength = list.length;
    list = list.filter((str) => typeof str === "string" && str.trim() !== "");


    if(list.length === 0) {
      
        const hasString = originalLength > 0 && list.some(x => typeof x === "string");
        return hasString ? "Empty" : "Invalid";
    }

    list = list.map((str) => str.replaceAll(/[ ,.@!$%^&*()]/g, "").toLowerCase());

    for(let i = 0; i < list.length; i++){
        if(longest.length < list[i].length){
            longest = list[i];
        }
    }

    return longest || "Empty";
}









function longestWord(list){
    let longest = "";
    if(!Array.isArray(list)){
        return "Invalid";
    }
    list = list.filter((str) => typeof str === "string" && str.trim() !== "");
    list = list.map((str) => str.replaceAll(/[ ,.@!$%^&*()]/g, "").toLowerCase());

    for(let i = 0; i < list.length; i++){
        if(typeof list[i] !== "string"){
            return "Invalid"
        }
        if(longest.length < list[i].length){
            longest = list[i];
            if(longest.length === 0){
            return "Empty"
        }
        }
    }
    return longest
}
// console.log(longestWord(["cat", "dog", "elephant", "tiger"]));
// console.log(longestWord(["hello","programming"]));
// console.log(longestWord(["programming", "is", "fun"]));
function testCases(){
    const testcases = [
        {
            input:["cat", "dog", "elephant", "tiger"],
            output: "elephant"
        },
        {
            input:"",
            output: "Invalid"
        },
        {
            input: {},
            output: "Invalid"
        },
        {
            input:["", "", ""],
            output: "Empty"
        },
        {
            input:[1,2,3,4,5],
            output: "Invalid"
        },
         {
            input: ["apple", "banana", "orange"],
            output: "banana"
        },
         {
            input:{name:"hlisty", age: 10},
            output: "Invalid"
        },
         {
            input:["hello","progr    amming"],
            output: "programming"
        },
         {
            input:["hello         .  "],
            output: "hello"
        },
         {
            input:["hello","hello","hello"],
            output: "hello"
        },
         {
            input:("Programming","is","fun"),
            output: "Invalid"
        }, 
         {
            input:["lone",67],
            output: "lone"
        },
         {
            input:346,
            output: "Invalid"
        },
         {
            input:true,
            output: "Invalid"
        },
         {
            input: ["programming", "is", "fun"],
            output: "programming"
        },

    ];
    testcases.forEach((testcase,index) => {
        let outputOriginal = longestWord(testcase.input);
        let status = "Pass";
        if(outputOriginal.length === testcase.output.length){
            status = outputOriginal === testcase.output ? "Pass" : "Fail"
        }
        else{
            status = "Fail"
        }
        let show = `
        Testcase : ${index+1} : ${status}
        Expected: ${testcase.output}
        Got: ${outputOriginal}
        `
        console.log(show)
    })
}
testCases();










