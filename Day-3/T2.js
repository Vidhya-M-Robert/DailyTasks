function Armstrong(num){
    if(!Number.isInteger(num) || num < 0)
    {
        return "Invalid Entry"
    }
    let count = 0;
    let newArr = [];
    let Originalnumber = num;
    const Stringed = num.toString();
    for(let i =0; i<Stringed.length; i++){
        count++;
    }
    for(let j = 0; j<Stringed.length; j++){
        const cubes = Stringed[j]**count;
        newArr.push(cubes);
    }
    let sum = newArr.reduce((acc,cur)=> acc+ cur,0);
    return sum === Originalnumber ;
}
// console.log(Armstrong(9474));

function testCases(){
    const testcases = [
        {
            input: 153,
            output: true
        },
         {
            input: [],
            output: "Invalid Entry"
        },
         {
            input: true,
            output: "Invalid Entry"
        },
         {
            input: "153",
            output: "Invalid Entry"
        },
        {
            input: 9474,
            output: true
        },
        {
            input: {name: "harry",age:20},
            output: "Invalid Entry"
        },
        {
            input: "hello there!",
            output: "Invalid Entry"
        },
        {
            input: null,
            output: "Invalid Entry"
        },
        {
            input: [9474],
            output: "Invalid Entry"
        },
        {
            input: 9.44,
            output: "Invalid Entry"
        },
        {
            input: 944,
            output: false
        },
        {
            input: -97,
            output: "Invalid Entry"
        },
        {
            input: "",
            output: "Invalid Entry"
        },
        {
            input: 0,
            output: true
        },
        {
            input: -12.4,
            output: "Invalid Entry"
        },

    ];

 testcases.forEach((testcase,index) => {
        let outputOriginal = Armstrong(testcase.input);
        let status = "Pass";
        if(outputOriginal.length === testcase.output.length){
            status = outputOriginal === testcase.output ? "Pass" : "Fail"
        }
        else{
            status = "Fail"
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