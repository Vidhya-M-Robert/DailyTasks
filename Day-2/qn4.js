function isAnagram(str1, str2){
    if(str1 === "" || str1 === null && str2 === "" || str2 === null){
        return "Invalid"
    }
    if(typeof str1 !== "string" || typeof str2 !== "string"){
        return "Invalid"
    }
    let str1New = str1.trim().replace(/\s+/g, "");
    let str2New = str2.trim().replace(/\s+/g, "");
    let strNew1 = str1New.toLowerCase().split("");
    let strNew2 = str2New.toLowerCase().split("");
    if(strNew1.length !== strNew2.length) return false
    const sort1 = strNew1.sort().join('');
    const sort2 = strNew2.sort().join('');
    const anagram = sort1 === sort2 ? true : false
    return anagram;
}
// console.log(isAnagram(race, car));
// console.log(isAnagram("restful", "fluster"));
// console.log(isAnagram("hello", "world"));

function testCases(){
    const testcases = [
        {
            input1: "listen", 
            input2: "silent",
            output:  true
        },
        {
            input1: "", 
            input2: "",
            output:  "Invalid"
        },
        {
            input1: "restful", 
            input2: "fluster",
            output:  true
        },
        {
            input1: "hello", 
            input2: "world",
            output:  false
        },
        {
            input1: "", 
            input2: "world",
            output:  "Invalid"
        },
        {
            input1: "hello", 
            input2: {},
            output:  "Invalid"
        },
        {
            input1: 89, 
            input2: 24,
            output:  "Invalid"
        },
         {
            input1: "listen", 
            input2: "sile  nt",
            output:  true
        },
        {
            input1: "", 
            input2: ["world"],
            output:  "Invalid"
        },
        {
            input1: "top", 
            input2: "Pot",
            output:  true
        },
        {
            input1: "race", 
            input2: "care",
            output:  true
        },
         {
            input1: {name:"race"}, 
            input2: "care",
            output:  "Invalid"
        },
        {
            input1: null, 
            input2: "racer",
            output:  "Invalid"
        },
        {
            input1: "ra", 
            input2: "race",
            output:  false
        },
        {
            input1: "race! ", 
            input2: "care  ",
            output:  false
        },
        
    ];
testcases.forEach((testcase,index) =>{
    let outputOriginal = isAnagram(testcase.input1,testcase.input2)
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
