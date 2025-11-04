function findFact(n){
   if(!Number.isInteger(n) || n < 0)
    {
        return "Invalid"
    }
    let fact;
    if(n === 0 || n === 1) return 1
    fact = n * findFact(n-1)
    return fact;
}
console.log(findFact(9));

    const testcases = [
        {
            testNumber: 1,
            input: 5,
            output: 120
        },
        {
            testNumber: 2,
            input: 0,
            output: 1
        },
        {
            testNumber: 3,
            input: "hello",
            output: "Invalid"
        },
        {
            testNumber: 4,
            input: -24,
            output: "Invalid"
        },
        {
            testNumber: 5,
            input: 1,
            output: 1
        },
        {
            testNumber: 6,
            input: 4,
            output: 24
        },
        {
            testNumber: 7,
            input: -12,
            output: "Invalid"
        },
        {
            testNumber: 8,
            input: true,
            output: "Invalid"
        },
        {
            testNumber: 9,
            input: 68.2,
            output: "Invalid"
        },
        {
            testNumber: 10,
            input: {1: "hello"},
            output: "Invalid"
        },
        {
            testNumber: 11,
            input: "10",
            output: "Invalid"
        },
        {
            testNumber: 12,
            input: [],
            output: "Invalid"
        },
        {
            testNumber: 13,
            input: 9,
            output: 362880
        },
        {
            testNumber: 14,
            input: null,
            output: "Invalid"
        },
        {
            testNumber: 15,
            input: undefined,
            output: "Invalid"
        },

       
    ];
testcases.forEach(test => {
    let output = findFact(test.input)
    if(test.output === output){
        console.log(`TestCase ${test.testNumber} Passed`)
    }
    else{
        console.log(`TestCase ${test.testNumber}Failed`)
    }
})
