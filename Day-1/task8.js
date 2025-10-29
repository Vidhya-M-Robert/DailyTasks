function groupAnagrams(words){
     const groups = {};
    if(!Array.isArray(words)){
        return "Invalid";
    }
    if(words.length === 0 || words === ""){
        return "Invalid"
    }
    for(const word of words){
        for(let i=0;i<words.length;i++){
        if(typeof(words[i]) !== "string") return "Invalid"
        }
        const checker = word.split("").sort().join("");
        if(groups[checker]){
            groups[checker].push(word);
        }
        else{
            groups[checker] = [word];
        }
    }
        const arrValues = Object.values(groups);
        const sorted = arrValues.sort((a,b)=>b.length-a.length);
        return sorted;
}
// console.log(groupAnagrams());

function testCases(){
    const testcase = [
        {
            input: ["care", "race", "acre", "dog", "god", "cat"],
            output: [ [ 'care', 'race', 'acre' ], [ 'dog', 'god' ], [ 'cat' ] ]

        },
        {
            input: [],
            output: "Invalid"

        },
        {
            input: {},
            output: "Invalid"

        },
      
        {
            input: ["care", "hello", "where", "did", "you", "cart"],
            output: [[ 'care' ],[ 'hello' ],[ 'where' ],[ 'did' ],[ 'you' ],[ 'cart' ]]

        },
        {
            input: null,
            output: "Invalid"

        },
        {
            input: 123,
            output: "Invalid"

        },
        {
            input: "",
            output: "Invalid"

        },
        {
            input: false,
            output: "Invalid"

        },
        {
            input: ["eat", "tea", "tan", "ate", "nat", "bat"],
            output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

        },
         {
            input: ["eat"],
            output: [["eat"]]

        },
         {
            input: [false,true],
            output: "Invalid"

        },
         {
            input: ("eat", "tea", "tan", "ate", "nat", "bat"),
            output: "Invalid"

        },
         {
            input: [ 'tan', 'nat' ,'bat' ],
            output: [[ 'tan', 'nat' ], [ 'bat' ] ]

        },
         {
            input: ["123","344","565","90"],
            output: "Invalid"

        },
         {
            input: "jhkj",
            output: "Invalid"

        },
        
    ];
for(let i=0;i<testcase.length;i++){
    const test=testcase[i]
    const result = groupAnagrams(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.output);
    console.log(`Test ${i+1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.output);
      console.log("Got:", result);
    }
  }
}
testCases();
