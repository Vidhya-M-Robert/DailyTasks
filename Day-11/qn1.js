function calculateTotal(billAmount,taxPercentage){
    if(taxPercentage === "" || taxPercentage === null || Number.isInteger(taxPercentage)){
        console.log("Invalid");
    }
    if(billAmount === "" || billAmount === null || Number.isInteger(billAmount)){
        console.log("Invalid");
    }
    if(typeof(taxPercentage || typeof(billAmount))){
        console.log("Invalid");
    }
    let taxPer;
    if(taxPercentage !== undefined){
        taxPer = taxPercentage;
    }
    else{
        taxPer = 20;
    }
    const taxAmount = billAmount * (taxPer / 100);
    // console.log(taxAmount);
}
calculateTotal(["70000"],18);

const testCases = [
    {
        testNumber: 1,
        input1: 70000,
        input2: 18,
        output: 12600
    },
    {
        testNumber: 2,
        input1: "",
        input2: 18,
        output: "Invalid"
    },
    {
        testNumber: 3,
        input1: 20000,
        input2: 15,
        output: 3000
    },
    {
        testNumber: 4,
        input1: 9000,
        input2: "",
        output: "Invalid"
    },
    {
        testNumber: 5,
        input1: 1000,
        input2: 5,
        output: 50
    },
    {
        testNumber: 6,
        input1: ["70000"],
        input2: 18,
        output: "Invalid"
    },
     {
        testNumber: 7,
        input1: "80000",
        input2: "20",
        output: "Invalid"
    },
    {
        testNumber: 8,
        input1: 1000000,
        input2: -70,
        output: -700000
    },
     {
        testNumber: 9,
        input1: 70000,
        input2: null,
        output: "Invalid"
    },
    // {
    //     testNumber: 10,
    //     input1: 70000,
    //     input2: 18,
    //     output: 12600
    // },
     {
        testNumber: 11,
        input1: true,
        input2: {},
        output: "Invalid"
    },
    //  {
    //     testNumber: 12,
    //     input1: 70000,
    //     input2: 18,
    //     output: 12600
    // },
    // {
    //     testNumber: 13,
    //     input1: 70000,
    //     input2: 18,
    //     output: 12600
    // },
    // {
    //     testNumber: 14,
    //     input1: 70000,
    //     input2: 18,
    //     output: 12600
    // },
    // {
    //     testNumber: 15,
    //     input1: 70000,
    //     input2: 18,
    //     output: 12600
    // },
];
testCases.forEach(test => {
    let output = calculateTotal(test.input1,test.input2)
    if(test.output === output){
        console.log(`TestCase ${test.testNumber} Passed`)
    }
    else[
        console.log(`TestCase ${test.testNumber}Failed`)
    ]
})

