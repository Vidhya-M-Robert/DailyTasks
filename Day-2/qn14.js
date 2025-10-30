function checkPalindrome(str){
    if(typeof(str) !== "string"){
        return "Invalid"
    }
    if(str === "" || str === null){
        return "Empty"
    }
    str = str.replaceAll(/[!@#$%^&*()><?_+.,';/]/g,"");
    str = str.trim().replace(/\s+/g, "");
    let strLower = str.toLowerCase();
    let reversed = strLower.split('').reverse().join('');
    return strLower === reversed;
}
// console.log(checkPalindrome("A man, a plan, a canal, Panama!"));
// console.log(checkPalindrome("RACEcar"));
// console.log(checkPalindrome("he   llo ! every .one"));

function testCases(){
    const testcases = [
        {
            input: "A man, a plan, a canal, Panama!",
            output: true
        },
        {
            input: "",
            output: "Empty"
        },
        {
            input: ["racecar is there"],
            output: "Invalid"
        },
        {
            input: 123,
            output: "Invalid"
        },
        {
            input: "RACEcar",
            output: true
        },
        {
            input: {},
            output: "Invalid"
        },
        {
            input: "Racecaeer",
            output: false
        },
        {
            input: true,
            output: "Invalid"
        },
        {
            input: "Malay      alam",
            output: true
        },
        {
            input: {name: "harry", age:20},
            output: "Invalid"
        },
        {
            input: "Racecar carRace",
            output: false
        },
        {
            input: ["Racecar"],
            output: "Invalid"
        },
        {
            input: "he   llo ! every .one",
            output: false
        },
        {
            input: null,
            output: "Invalid"
        },
        {
            input: "Racecar",
            output: true
        },

    ];
   testcases.forEach((testcase,index) => {
        let outputOriginal = checkPalindrome(testcase.input);
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