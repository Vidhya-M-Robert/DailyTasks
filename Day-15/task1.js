function returnIndex(arr,target){
     for(let i=0;i< arr.length;i++){
        if(typeof arr[i] !== "number"){
            return "Invalid Entry"
        }
    }
    if(!Array.isArray(arr) || arr === "" || target === "" || typeof(target) !== "number"){
        return "Invalid Entry"
    }
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[i] + arr[j] === target){
                newArr.push(i,j);
            }
        }
    }
     if (newArr.length === 0) {
        return -1;
    }
    let removeDup =[...new Set(newArr)];
    if(removeDup.length > 2){
        let final = removeDup.slice(0,2);
        return final;
    }
    else{
        return removeDup;
    }
}
console.log(returnIndex([2,7,11,15,18],5));

function testCases(){
    const testcases = [
        {
            input1: [2,7,11,15], 
            input2: 13,
            output:  [ 0, 2 ]
        },
        {
            input1: "", 
            input2: "",
            output:  "Invalid Entry"
        },
        {
            input1: "", 
            input2: 22,
            output:  "Invalid Entry"
        },
        {
            input1: [2,7,11,15], 
            input2: 9,
            output: [ 0, 1 ] 
        },
        {
            input1: [22,11,8,4], 
            input2: 3,
            output:  -1
        },
        {
            input1: "hello", 
            input2: 22,
            output:  "Invalid Entry"
        },
            {
            input1: true, 
            input2: 14,
            output:  "Invalid Entry"
        },
        {
            input1: ["89","9","10","12"], 
            input2: 23,
            output:  "Invalid Entry"
        },
        {
            input1: [34,67,54,12,8], 
            input2: 79,
            output: [ 1, 3 ]
        },
        {
            input1: [2,7,11,15],
            input2: {},
            output:  "Invalid Entry"
        },
        {
            input1: [16,78,34,67,54], 
            input2: 9,
            output:  -1
        },
        {
            input1: {name:"race"}, 
            input2: 27,
            output:  "Invalid Entry"
        },
        {
            input1: NaN, 
            input2: null,
            output:  "Invalid Entry"
        },
        {
            input1: [2,7,11,15], 
            input2: 17,
            output:  [0,3]
        },
        {
            input1: [9,24,32,12,4], 
            input2: '',
            output:  "Invalid Entry"
        },
        
    ];
testcases.forEach((testcase,index) =>{
    let outputOriginal = returnIndex(testcase.input1,testcase.input2)
    let status = "pass"
    if(Array.isArray(outputOriginal)){
        if(outputOriginal.length === testcase.output.length){
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
