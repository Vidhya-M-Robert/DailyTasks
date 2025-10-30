function longestWord(list){
    let longest = ""
    if(!Array.isArray(list)){
        return "Invalid";
    }
    list = list.filter((str) => typeof str === "string" && str.trim() !== "");
    list = list.map((str) => str.replaceAll(/[ ,.@!$%^&*()]/g, "").toLowerCase());

    for(let i = 0; i < list.length; i++){
        if(typeof list[i] === "string"){
            if(longest.length < list[i].length){
            longest = list[i];
            if(longest.length === 0){
            return "Empty"
        }
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
        // {
        //     input:["", "", ""],
        //     output: "Empty"
        // },
        // {
        //     input:[1,2,3,4,5],
        //     output: "Invalid"
        // },
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