function DuplicatesfromString(strs){
    if(typeof(strs) !== "string"){
        return "Invalid"
    }
    if(strs === "" || strs === null){
        return "Empty"
    }
    strs = strs.replaceAll(/[!@#$%^&*()><?_+.,';/]/g,"");
    strs = strs.trim().replace(/\s+/g, "");
    let removedDuplicates = "";
    for(let str of strs){
        if(!removedDuplicates.includes(str)){
            removedDuplicates = removedDuplicates + str
        }
    }
    return removedDuplicates;
}
console.log(DuplicatesfromString('Good !!!!!!!!!!!!!!!!!!!!!!!'));


function testCases(){
    const testcases = [
        {
            input:"apple",
            output:"aple"
        },
        {
            input:"",
            output:"Empty"
        },
        {
            input:[],
            output:"Invalid"
        },
        {
            input:"programming programming programming",
            output:"progamin"
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
            input:"hell     o world of programming",
            output:"helowrdfpgamin"
        },
        {
            input:["hello world of programming"],
            output:"Invalid"
        },
        {
            input:"Good !!!!!!!!!!!!!!!!!!!!!!!",
            output:"God"
        },
        {
            input:true,
            output:"Invalid"
        },
        {
            input:null,
            output:"Invalid"
        },
        {
            input:{name: "Harry", age: 20},
            output:"Invalid"
        },
        {
            input:"    hello     .   ",
            output:"helo"
        },
        {
            input:["the orange box is here"],
            output:"Invalid"
        },
        {
            input:"coding",
            output:"coding"
        },

    ];
testcases.forEach((testcase,index) => {
    let outputOriginal = DuplicatesfromString(testcase.input);
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