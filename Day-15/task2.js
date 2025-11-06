function findIndex(arr,target){
     if(!Array.isArray(arr) || arr === "" || target === "" || typeof(target) !== "number"){
        return "Invalid Entry"
    }
    if(arr.includes(target)){
        return arr.indexOf(target);
    }
    if(!arr.includes(target)){
        for(let i=0;i<arr.length;i++){
            if(target > arr[i-1] && target < arr[i]){
                // arr[i] = target;
                return i
            }
        }
        for(let i=0;i<arr.length;i++){
        if(target >= arr[i]){
            arr.push(target);
            return arr.indexOf(target)
        }
        else{
            arr.unshift(target);
            return arr.indexOf(target)
        }
        }
    }
}
// console.log(findIndex([2,17,19,25,28,32],30));
function testCases(){
    const testcases = [
        {
            input1: [1,3,5,6], 
            input2: 4,
            output: 2
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
            input1: [2,4,5,10], 
            input2: 19,
            output: 4
        },
        {
            input1: "hello", 
            input2: 22,
            output:  "Invalid Entry"
        },
        {
             input1: [22,31,38,44,56], 
             input2: 40,
             output: 3
         },
         {
            input1: true, 
            input2: 14,
            output:  "Invalid Entry"
        },
        {
            input1: 89, 
            input2: 23,
            output:  "Invalid Entry"
        },
        {
            input1: [1,7,9,10,12], 
            input2: -4,
            output: 0
        },
        {
            input1: [2,7,11,15],
            input2: {},
            output:  "Invalid Entry"
        },
        {
            input1: [2,17,19,25,28,32], 
            input2: 30,
            output:  5
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
            output:  4
        },
        {
            input1: [9,24,32,12,4], 
            input2: '',
            output:  "Invalid Entry"
        },
        
    ];
testcases.forEach((testcase,index) =>{
    let outputOriginal = findIndex(testcase.input1,testcase.input2)
    let status = "pass"
     status = outputOriginal === testcase.output ? "Pass" : "Fail"
    let show = `
    Testcase ${index+1} ${status}
    Expected: ${testcase.output}
    Got:${outputOriginal}
    `
    console.log(show)
})
}
testCases();

