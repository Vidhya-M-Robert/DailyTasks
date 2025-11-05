function stringConstructionFromAnother(str1,str2){
    if(typeof(str1) !== "string" || typeof (str2) !== "string"){
        return "Invalid Entry";
    }
    if(str1.length > str2.length){
        return "Not Possible";
    }
    if(str1 === "" ){
        return "Invalid Entry";
    }
    let str1New = str1.trim().replace(/\s+/g, "");
    let str2New = str2.trim().replace(/\s+/g, "");
    if(str2New.includes(str1New)){
        return true
    }
    else{
        return false
    }
    }
// console.log(stringConstructionFromAnother("a", "b"));
// console.log(stringConstructionFromAnother("a a", "aabcnd"));


function testCases(){
    const testcases = [
        {
            input1: "a", 
            input2: "b",
            output:  false
        },
        {
            input1: "", 
            input2: "",
            output:  "Invalid Entry"
        },
        {
            input1: "aa", 
            input2: "aab",
            output:  true
        },
        {
            input1: [], 
            input2: "world",
            output:  "Invalid Entry"
        },
        {
            input1: "aabbccd", 
            input2: "aabb",
            output:  "Not Possible"
        },
        {
            input1: "hello", 
            input2: {},
            output:  "Invalid Entry"
        },
            {
            input1: "a a", 
            input2: "aabcnd",
            output:  true
        },
        {
            input1: 89, 
            input2: 24,
            output:  "Invalid Entry"
        },
        {
            input1: "m", 
            input2: "aacb",
            output:  false
        },
        {
            input1: "accbd", 
            input2: "cbcad",
            output:  false
        },
        {
            input1: "racecar", 
            input2: "race",
            output:  "Not Possible"
        },
        {
            input1: {name:"race"}, 
            input2: "care",
            output:  "Invalid Entry"
        },
        {
            input1: NaN, 
            input2: null,
            output:  "Invalid Entry"
        },
        {
            input1: "ra", 
            input2: "race",
            output:  true
        },
        {
            input1: "race", 
            input2: "caretake",
            output:  false
        },
        
    ];
testcases.forEach((testcase,index) =>{
    let outputOriginal = stringConstructionFromAnother(testcase.input1,testcase.input2)
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

// function stringConstructionFromAnother(str1,str2){
//     if(str1.length > str2.length){
//         return "Not Possible";
//     }
//     for(let i = 0; i< str1.length;i++){
//         for(let j=0; j<str2.length;j++){
//             if(str1[i] !== str2[j]){
//                 return false;
//             }
//             else{
//                 return true;
//             }
//         }
//     }
// }
// console.log(stringConstructionFromAnother("a", "b"));
// console.log(stringConstructionFromAnother("aa", "aab"));
