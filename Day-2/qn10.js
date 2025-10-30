function longestCommonPrefix(arr){

    if(!Array.isArray(arr)){
        return "Invalid";
    }
    else if(arr.length === 0) return "";
    arr = arr.filter(item => typeof item === "string");
    if (arr.length === 0) return "";
    let prefix = arr[0];
        for (let i = 1; i < arr.length; i++){
        while(!arr[i].startsWith(prefix)){
            prefix = prefix.slice(0,-1)
            if(prefix === "") return "";
        }
    }
   
    return prefix
}
// console.log(JSON.stringify(longestCommonPrefix(["flower",,"flow","flight"])));
// console.log(JSON.stringify(longestCommonPrefix(['dog','racecar','car'])));
// console.log(JSON.stringify(longestCommonPrefix(["apple", "app", "application"])));


function testCases(){
    const testcases = [
        {
            input:['flower','flow','flight'],
            output:"fl"
        },
        {
            input:"",
            output:"Invalid"
        },
        {
            input:[],
            output:""
        },
        {
            input:['programming','programming','programming'],
            output:"programming"
        },
        {
            input:123,
            output:"Invalid"
        },
        {
            input:false,
            output:"Invalid"
        },
        {
            input:{},
            output:"Invalid"
        },
        {
            input:['flo   wer','flow','flight'],
            output: "fl"
        },
        {
            input:[1,2,3,4,5],
            output:"Invalid"
        },
        {
            input:['dog','racecar','car'],
            output:""
        },
        {
            input:undefined,
            output:"Invalid"
        },
        {
            input:{name: "Harry", age: 20},
            output:"Invalid"
        },
        {
            input:["app","bat",'cold'],
            output:""
        },
        {
            input:["flower",,"flow","flight"],
            output:"fl"
        },
        {
            input:["apple", "app", "application"],
            output:"app"
        },

    ];
testcases.forEach((testcase,index) => {
    let outputOriginal = longestCommonPrefix(testcase.input);
    let status = "Pass";
    if(outputOriginal.length === testcase.output.length){
       status =  outputOriginal === testcase.output ? "Pass": "Fail"
    }
    else{
        status = "Fail"
    }
    let show = `
    TestCase ${index+1} : ${status}
    Expected: ${testcase.output}
    Got: ${outputOriginal}`
    console.log(show); 
})
}
testCases()