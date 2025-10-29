function checkPerfectSquare(numbers){
  if(typeof(numbers) !== "number" || isNaN(numbers)){
        return "Invalid Entry";
    }
    if (numbers < 0) {
    return "Invalid Entry";
  }
  else{
     let num = Math.round(numbers)
    for (let i = 0; i < num ; i++){
      if(i * i === num){
        return true
      }
    }
    return false
  }
}
// console.log(checkPerfectSquare(16));
// console.log(checkPerfectSquare(10));
// console.log(checkPerfectSquare(25));

const testCases = [
    {
        testNumber: 1,
        input: 16,
        output: true
    },
    {
        testNumber: 2,
        input: "hy",
        output: `Invalid Entry`
    },
     {
        testNumber: 3,
        input: [],
        output: `Invalid Entry`
    },
     {
        testNumber: 4,
        input: "hello",
        output: `Invalid Entry`
    },
     {
        testNumber: 5,
        input: [45],
        output: `Invalid Entry`
    },
     {
        testNumber: 6,
        input: {},
        output: `Invalid Entry`
    },
     {
        testNumber: 7,
        input: 0,
        output: false
    },
     {
        testNumber: 8,
        input: 2     ,
        output: false
    },
     {
        testNumber: 9,
        input: 1.1,
        output: false
    },
     {
        testNumber: 10,
        input: {name: "harry"},
        output: `Invalid Entry`
    },
     {
        testNumber: 11,
        input: "",
        output: `Invalid Entry`
    },
     {
        testNumber: 12,
        input: -25,
        output:  "Invalid Entry"
    },
     {
        testNumber: 13,
        input: 10,
        output: false
    },
     {
        testNumber: 14,
        input: !0,
        output:  `Invalid Entry`
    },
     {
        testNumber: 15,
        input: 25,
        output: true
    },
];
testCases.forEach(test => {
    let output = checkPerfectSquare(test.input)
    if(test.output === output){
        console.log(`TestCase ${test.testNumber} Passed`)
    }
    else{
        console.log(`TestCase ${test.testNumber}Failed`)
    }
})

