import { groupAnagrams } from "./task2";
function testCases(){
const testcases = [
    {
        input: ["eat", "tea", "tan", "ate", "nat", "bat"],
        output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
    },
    {
        input: ["tan","ant","nta","care"],
        output: [ [ 'tan', 'ant', 'nta' ], [ 'care' ] ]
    },
    {
        input: ["bat","nta","care"],
        output: [ [ 'bat' ], [ 'nta' ], [ 'care' ] ]
    },
    {
        input: ["race","care"],
        output: [ [ 'race', 'care' ] ]
    },
    {
        input: ["listen","silent","tan","car","air","arc"],
        output: [ [ 'listen', 'silent' ], [ 'car', 'arc' ], [ 'tan' ], [ 'air' ] ]
    },
    {
        input:[""],
        output: "Invalid"
    },
    {
        input: ["car","war","jar","care","jare","race"],
        output: [ [ 'care', 'race' ], [ 'car' ], [ 'war' ], [ 'jar' ], [ 'jare' ] ]
    },
    {
        input: ["car","race","here","there"],
        output: [ [ 'car' ], [ 'race' ], [ 'here' ], [ 'there' ] ]
    },
    {
        input: [],
        output: []
    },
    {
        input: ["eat", "tan", "ate", "nat", "bat","nta","ant","arc","car","race"],
        output: [[ 'tan', 'nat', 'nta', 'ant' ],[ 'eat', 'ate' ],[ 'arc', 'car' ],[ 'bat' ],[ 'race' ]]
    }
];
    testcases.forEach((testcase,index)=>{
        const result = groupAnagrams(testcase.input);
        const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log(`Testcase ${index+1}: ${passed ? "Pass":"Fail"}`);
        if(!passed){
            console.log(`Expected result: ${testcase.output}\n
                Got Result: ${result}`)
        }
    })
}
testCases();