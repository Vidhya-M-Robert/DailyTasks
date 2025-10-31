function sortedOnLength(arr){
    if(!Array.isArray(arr)){
        return "Invalid"
    }
    if(arr.length === 0){
        return "Empty"
    }
   let strings = arr.filter(item => typeof item === "string");
    if (strings.length === 0) {
        return "Invalid";
    }

    strings = strings.map(str => str.replace(/\s+/g, ""));
    let sorted = strings.sort((a,b) => a.length-b.length);
    return sorted; 
}
console.log(sortedOnLength(["Racecar", ,"gear", "steering", "alloy","wheel"]));

function testCases(){
    const testcases = [
        {
            input: ["cat", "dog","elephant", "tiger"],
            output: ['cat', 'dog', 'tiger', 'elephant']
        },
        {
            input: "",
            output: "Invalid"
        },
        {
            input: [],
            output: "Empty"
        },
        {
            input: 123,
            output: "Invalid"
        },
        {
            input:["hello","hello","hello"],
            output: ["hello","hello","hello"]
        },
        {
            input: {},
            output: "Invalid"
        },
        {
            input: ["hell   o", "wo  rld","programming"],
            output: ["hello", "world","programming"]
        },
        {
            input: true,
            output: "Invalid"
        },
        {
            input: [true,'hello',"every","monday"],
            output: ["hello","every","monday"]
        },
        {
            input: {name: "harry", age:20},
            output: "Invalid"
        },
        {
            input: [1,2,3,4,5],
            output: "Invalid"
        },
        {
            input: ["Racecar", ,"gear", "steering", "alloy","wheel"],
            output: [ 'gear', 'alloy', 'wheel', 'Racecar', 'steering' ]
        },
        {
            input: ["he","e","ce"],
            output: ["e","he","ce"]
        },
        {
            input: null,
            output: "Invalid"
        },
        {
            input:  ["open", "source", "programming", "is", "fun"],
            output: [ 'is', 'fun', 'open', 'source', 'programming' ]
        },

    ];
   testcases.forEach((testcase,index) => {
    const outputOriginal = sortedOnLength(testcase.input)
    let status = "Pass"
        if(Array.isArray(outputOriginal) && Array.isArray(testcase.output)){
            if(outputOriginal.length === testcase.output.length){
                for(let i=0;i<outputOriginal.length;i++){
                    if(outputOriginal[i] !== testcase.output[i]){
                        status = "Fail";
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
        Testcase : ${index+1} : ${status}
        Expected: ${testcase.output}
        Got: ${outputOriginal}
        `
        console.log(show)
    })
}
testCases();