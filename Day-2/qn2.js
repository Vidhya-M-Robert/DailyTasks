function wordCount(str){
    if(typeof(str) !== "string"){
        return "Invalid Entry";
    }
    else if(str.length === 1){
        return "There is no words to count";
    }
    else{
    str = str.replaceAll(/[!@#$%^&*()><?_+.,';/]/g,"");
    let newString = str.trim().replace(/\s+/g, " ");
    let count = 0;
    if(newString === "") return count;
    for(let i = 0; i <= newString.length; i++){
        if(newString[i]===" "){
            count++;
        }
        }
    return count+1;
}
}
// console.log(wordCount("Hello   World."));
// console.log(wordCount("This is a sample sentence."));
// console.log(wordCount("Programming is fun!"));

const testCases = [
    {
        testNumber: 1,
        input: "Hello World.",
        output: 2
    },
    {
        testNumber: 2,
        input: 9,
        output: `Invalid Entry`
    },
    {
        testNumber: 3,
        input: "",
        output: 0
    },
     {
        testNumber: 4,
        input: "Programming is fun!",
        output: 3
    },
    {
        testNumber: 5,
        input: [],
        output: `Invalid Entry`
    },
    {
        testNumber: 6,
        input: "This is a sample sentence.",
        output: 5
    },
    {
        testNumber: 7,
        input: {},
        output: `Invalid Entry`
    },
    {
        testNumber: 8,
        input: "o",
        output: `There is no words to count`
    },
    {
        testNumber: 9,
        input: ["hey what is going on"],
        output: `Invalid Entry`
    },
     {
        testNumber: 10,
        input: "hey     everybody.",
        output: 2
    },
    {
        testNumber: 11,
        input: "hey     everybody.",
        output: 2
    },
    {
        testNumber: 12,
        input: null,
        output: `Invalid Entry`
    },
     {
        testNumber: 13,
        input: "hey",
        output: 1
    },
    {
        testNumber: 14,
        input: {hello: "everyone"},
        output: `Invalid Entry`
    },
     {
        testNumber: 15,
        input: "This is a sample! sentence.",
        output: 5
    },
    
    
]
testCases.forEach(test => {
    let output = wordCount(test.input)
    if(test.output === output){
        console.log(`TestCase ${test.testNumber} Passed`)
    }
    else[
        console.log(`TestCase ${test.testNumber}Failed`)
    ]
})