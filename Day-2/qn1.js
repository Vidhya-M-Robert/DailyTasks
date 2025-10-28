function prime(num){
    if(typeof(num) !== "number"){
        return "Invalid Entry";
    }
    else{
        if(num <= 1){
            return false;
        }
        else if(num === 2){
            return true
        }
        else{
            for(let i=2; i <=num-1; i++){
                if(num % i === 0){
                    return false;
                }
                else{
                    return true;
                }
            }
        }
    }
}
// console.log(prime(7));
// console.log(prime(100));
// console.log(prime(29));

const testCases = [
    {
        testNumber: 1,
        input: 7,
        output: true
    },
     {
        testNumber: 2,
        input: 10,
        output: false
    },
     {
        testNumber: 3,
        input: [],
        output: `Invalid Entry`
    },
     {
        testNumber: 4,
        input: undefined,
        output: `Invalid Entry`
    },
     {
        testNumber: 5,
        input: 29,
        output: true
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
        input: 2,
        output: true
    },
     {
        testNumber: 9,
        input: 1,
        output: false
    },
     {
        testNumber: 10,
        input: true,
        output: `Invalid Entry`
    },
     {
        testNumber: 11,
        input: "",
        output: `Invalid Entry`
    },
     {
        testNumber: 12,
        input: -5,
        output:  false
    },
     {
        testNumber: 13,
        input: 100,
        output: false
    },
     {
        testNumber: 14,
        input: null,
        output: `Invalid Entry`
    },
     {
        testNumber: 15,
        input: '',
        output: `Invalid Entry`
    },
];
testCases.forEach(test => {
    let output = prime(test.input)
    if(test.output === output){
        console.log(`TestCase ${test.testNumber} Passed`)
    }
    else[
        console.log(`TestCase ${test.testNumber}Failed`)
    ]
})

