//SUBSTRING => USED TO EXTRACT A PORTION OF STRING
// str.substring(start, end)
function pattern(str) {
  let arr = [];
  if (typeof str !== "string") {
    return "invalid";
  }
  str = str.trim();
  if (str === "") {
    return "Empty";
  }
  for (let i = 0; i < str.length; i++) {
    arr.push(str.substring(0, i + 1));
  }
  for (let i = 1; i <= str.length; i++) {
    arr.push(str.substring(i));
  }
  return arr.join("\n");
}

pattern("hello ");

function testCases(){
   const tests = [
    {
        id: 1,
        input : "CAT",
        output: `C\nCA\nCAT\nAT\nT\n`
    },
    {
        id: 2,
        input : "SKODA",
        output: `S\nSK\nSKO\nSKOD\nSKODA\nKODA\nODA\nDA\nA\n`
    },
    {
        id: 3,
        input : "LAP",
        output: `L\nLA\nLAP\nAP\nP\n`
    },
    {
        id: 4,
        input : "kIa",
        output: `k\nkI\nkIa\nIa\na\n`
    },
    {
        id: 5,
        input : "honda ",
        output: `h\nho\nhon\nhond\nhonda\nonda\nnda\nda\na\n`
    },
    {
        id: 6,
        input : "",
        output: `Empty`
    },
    {
        id: 7,
        input : "k",
        output: `k\n`
    },
     {
        id: 8,
        input : "Ba",
        output: `B\nBa\na\n`
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
        input : 10,
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
        input : '',
        output: `Empty`
    },
];
for(let i=0;i<tests.length;i++){
    const test=tests[i]
    const result = pattern(test.input);
    const passed = result === test.output;
    console.log(`Test ${i+1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.output);
      console.log("Got:", result);
    }
  }
}
testCases();