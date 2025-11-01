function Productoflargest(arr){
    if(!Array.isArray(arr)){
        return "Invalid Entry"
    }
    if (arr.length < 3) {
     return "Invalid Entry";
    }
    for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || isNaN(arr[i])) {
      return "Invalid Entry";
    }
  }
    let sortedArray = arr.sort((a,b)=>b-a);
    const largest = sortedArray.slice(0,3);
    const product = largest.reduce((acc,curr) => acc*curr,1);
    return product;
}
// console.log(Productoflargest([-1, -2, -3, -4, -5]));
// console.log(Productoflargest([-4, -3, -2, -1, 0]));
// console.log(Productoflargest([1, 2, 3, 4]));
function testCases(){
    const testcases = [
        {
            testNumber: 1,
            input: [-1, -2, -3, -4, -5],
            output: -6
        },
        {
            testNumber: 2,
            input: [-4, -3, -2, -1, 0],
            output: 0
        },
        {
            testNumber: 3,
            input: [1,2,3,4],
            output: 24
        },
        {
            testNumber: 4,
            input: "hello",
            output: "Invalid Entry",
        },
        {
            testNumber: 5,
            input: "",
            output:"Invalid Entry",
        },
        {
            testNumber:6,
            input: {},
            output:"Invalid Entry",
        },
        {
            testNumber:7,
            input: false,
            output:"Invalid Entry",
        },
        {
            testNumber:8,
            input: !2,
            output: "Invalid Entry"
        },
        {
            testNumber:9,
            input: [9],
            output: "Invalid Entry"
        },
        {
            testNumber: 10,
            input: ["hey","hello","every","here"],
            output: "Invalid Entry"
        },
        {
            testNumber: 11,
            input: {name: "harry", age:20},
            output: "Invalid Entry"
        },
        {
            testNumber: 12,
            input: [5, 5, 5, 5],
            output: 125
        },
        {
            testNumber: 13,
            input:[],
            output: "Invalid Entry"
        },
        {
            testNumber: 14,
            input:[5, -10, 3, 2, 1, -1],
            output: 30
            
        },
        {
            testNumber: 15,
            input:[1.5, 2.5, 3.5, 4.5],
            output: 39.375
        }
    ];
testcases.forEach((testcase,index) =>{
    let outputOriginal = Productoflargest(testcase.input)
    let status = "pass"
    if(Array.isArray(outputOriginal)){
        if(outputOriginal.length === testcase.output.length){
            // outputOriginal.length === 0 ? status = "Pass" : status = "Fail"
            for(let i=0; i<outputOriginal.length;i++){
                if(outputOriginal[i] !== testcase.output[i]){
                    status = "Fail"
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
    Testcase ${index+1} ${status}
    Expected: ${testcase.output}
    Got:${outputOriginal}
    `
    console.log(show)
})
}
testCases();
