function nonRepeatIndex(str){
    if(typeof(str) !== "string" || str === ""){
        return "Invalid Entry";
    }
    str = str.trim().replace(/\s+/g, "");
    for(let i=0; i< str.length;i++){
        let unique = true;
        for(let j=0; j< str.length;j++){
            if(str[i] === str[j] && i !== j){
                unique = false;
                break;
            }
        }
        if(unique === true){
            return i
        }
    }
    return -1
}
console.log(nonRepeatIndex("care race"));
// console.log(nonRepeatIndex("aabb"));
// console.log(nonRepeatIndex("rsoes are red"));

function testCases(){
    const testcases = [
        {
            input: "roses are red", 
            output:  1
        },
        {
            input: null,
            output: "Invalid Entry"
        },
        {
            input: [],
            output: "Invalid Entry"
        },
        {
            input: "aabb",
            output: -1
        },
        {
            input:["roses are red"],
            output: "Invalid Entry"
        },
        {
            input:"rsoes are red",
            output: 2
        },
        {
            input: true,
            output: "Invalid Entry"
        },
        {
            input:"",
            output: "Invalid Entry"
        },
       {
            input:"racecar",
            output: 3
        },
        {
            input:234,
            output: "Invalid Entry"
        },
        {
            input:"care race",
            output: -1
        },
        {
            input:{name:"harry",age:20},
            output: "Invalid Entry"
        },
        {
            input:"r os es  are red",
            output: 1
        },
        {
            input:{},
            output: "Invalid Entry"
        },
        {
            input:"red deer",
            output: -1
        },
    ]
testcases.forEach((testcase,index) =>{
    let outputOriginal = nonRepeatIndex(testcase.input)
    let status = "pass"
    status = outputOriginal === testcase.output ? "Pass" : "Fail"
    let show = `
    Testcase ${index+1} ${status}
    Expected: ${testcase.output}
    Got:${outputOriginal}
    `
    console.log(show)
})
}
testCases();


