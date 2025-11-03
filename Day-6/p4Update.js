function printPattern(n){
    if(n === "") return "Empty";
     if(typeof n !== "number") return "invalid";
    if(n === 0 || n === null) return "Empty";
    let letters = [];
    for(let i=65; i<=90; i++){
        letters.push(i);
    }
    let pat = [];
    for(let i=0;i<n;i++){
      let store = String.fromCharCode(letters[i]).repeat(i+1).split("").join(" "); 
      pat.push(store);
    }
    return pat.join("\n");
}
// console.log(printPattern(0));
function testCases(){
   const tests = [
    {
        id: 1,
        input : 8,
        output: `A\nB B\nC C C\nD D D D\nE E E E E\nF F F F F F\nG G G G G G G\nH H H H H H H H`
    },
    {
        id: 2,
        input : 2,
        output: `A\nB B`
    },
    {
        id: 3,
        input : 5,
        output: `A\nB B\nC C C\nD D D D\nE E E E E`
    },
    {
        id: 4,
        input : "9",
        output: `invalid`
    },
    {
        id: 5,
        input : 10,
        output: `A\nB B\nC C C\nD D D D\nE E E E E\nF F F F F F\nG G G G G G G\nH H H H H H H H\nI I I I I I I I I\nJ J J J J J J J J J`
    },
    {
        id: 6,
        input : [3],
        output: `invalid`
    },
    {
        id: 7,
        input : 0,
        output: `Empty`
    },
     {
        id: 8,
        input : "A",
        output: `invalid`
    },
     {
        id: 9,
        input : {},
        output: `invalid`
    },
     {
        id: 10,
        input : false,
        output: `invalid`
    },
     {
        id: 11,
        input : [],
        output: `invalid`
    },
     {
        id: 12,
        input : "ABBCCC",
        output: `invalid`
    },
     {
        id: 13,
        input : true,
        output: `invalid`
    },
     {
        id: 14,
        input : undefined,
        output: `invalid`
    },
    {
        id: 15,
        input: '',
        output:`Invalid`
    }
    
];
for(let i=0;i<tests.length;i++){
    const test=tests[i]
    const result = printPattern(test.input);
    const passed = result === test.output;
    console.log(`Test ${i+1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.output);
      console.log("Got:", result);
    }
  }
}
testCases();



