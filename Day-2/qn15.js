function reverseString(str){
  if(typeof(str) !== "string"){
        return "Invalid"
    }
    if(str === "" || str === null){
        return "Empty"
    }
    str = str.replaceAll(/[!@#$%^&*()><?_+.,';/]/g,"");
    str = str.trim().replace(/\s+/g, " ");
    const reverseOrder = str.split("").reverse().join("");
    const withoutOrderChange = reverseOrder.split(" ").reverse().join(" ");
    return withoutOrderChange
}

// console.log(reverseString("he@#llo ! every . one"));
// console.log(reverseString("Programmers are awesome"));
// console.log(reverseString("Programming is fun"));


function testCases(){
    const testcases = [
        {
            input: "Hello world",
            output: "olleH dlrow"
        },
        {
            input: "",
            output: "Empty"
        },
        {
            input: ["gnimmargorP si nuf"],
            output: "Invalid"
        },
        {
            input: 123,
            output: "Invalid"
        },
        {
            input: "Programmers are awesome",
            output: "sremmargorP era emosewa"
        },
        {
            input: {},
            output: "Invalid"
        },
        {
            input: "Racecaeer",
            output: "reeacecaR"
        },
        {
            input: true,
            output: "Invalid"
        },
        {
            input: "Malay!alam",
            output: "malayalaM"
        },
        {
            input: {name: "harry", age:20},
            output: "Invalid"
        },
        {
            input: [],
            output: "Invalid"
        },
        {
            input: ["Racecar"],
            output: "Invalid"
        },
        {
            input: "he@#llo ! every . one",
            output: "olleh yreve eno"
        },
        {
            input: null,
            output: "Invalid"
        },
        {
            input: "Programming is fun",
            output: "gnimmargorP si nuf"
        },

    ];
   testcases.forEach((testcase,index) => {
        let outputOriginal = reverseString(testcase.input);
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