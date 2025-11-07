function findUnique(arrs){
    if(!Array.isArray(arrs)){
        return "Invalid";
    }
   if (!arrs.length){
     return "Invalid";
   }
    let count= {};
    for(let arr of arrs){
        count[arr] = (count[arr] || 0) + 1;
    }
    let keys = Object.keys(count);
    for(let i=0;i<keys.length;i++){
        if(count[keys[i]]=== 1){
            return Number(keys[i]);
        }
    } 
    return "Nothing Unique";
}
// console.log(findUnique([2,4,5,6,2,5,24,4,6]));

function testCases(){
    const testcases = [
        {
            input: [2,4,5,6,2,5,24,4,6],
            output: 24
        },
        {
            input: [3,14,62,3,62,14],
            output:'Nothing Unique'

        },
        {
            input: "",
            output: "Invalid"

        },
        {
            input: (2, 4, 6, 8, 10),
            output: "Invalid"

        },
        {
            input: [19, 2, 33, 4,19, 33],
            output: 2

        },
        {
            input: [15,, ,25, 15, 25, 55],
            output:  55
        },
        {
            input: (false,true,null),
            output: "Invalid"
        },
        {
            input: null,
            output: "Invalid"

        },
        {
            input: [19, 2, 33, 4,19,2,33],
            output: 4

        },
        {
            input: [-2,-4,-2,-18,-7,-18,-7],
            output: -4

        },
        {
            input: (2, "hello", 6, "hey", 10),
            output: "Invalid"

        },
        {
            input: (2, "error", {name: "harry"},8, 10),
            output: "Invalid"

        },
        {
            input: [-4,2,-4,2],
            output: "Nothing Unique"

        },
        {
            input: [],
            output: "Invalid"

        },
        {
            input: [2,8,3][4,3,1],
            output: "Invalid"

        },
    ]
testcases.forEach((testcase,index) =>{
    let outputOriginal = findUnique(testcase.input)
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