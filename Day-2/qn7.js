function longestWord(str){
     if(typeof(str) !== "string"){
        return "Invalid"
    }
    if(str === "" || str === null){
        return "Empty"
    }
    str = str.replaceAll(/[!@#$%^&*()><?_+.,';/]/g,"");
    str = str.trim().replace(/\s+/g, " ");
    let arr = [];
    const words = str.split(" ");
    // console.log(words);
    let newWord = "";

    for(let word of words){
        if(word.length >= newWord.length)
         newWord = word;

    } 
    for(let word of words){
        if(word.length === newWord.length){
            arr.push(word);
        }
    }
    const string = arr.toString();
    return string;
    
}
// console.log(longestWord(["the orange box is here"]));
// longestWord("The quick brown fox jumps over the lazy dog");
// longestWord("I love coding");


function testCases(){
    const testcases = [
        {
            input:"hello world of programming",
            output:"programming"
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
            output:"programming,programming, programming"
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
            output:"programming"
        },
        {
            input:"hello world of programming",
            output:"programming"
        },
        {
            input:"Good !!!!!!!!!!!!!!!!!!!!!!!",
            output:"programming"
        },
        {
            input:"The quick brown fox jumps over the lazy dog",
            output:"quick,brown,jumps"
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
            input:"    hello     .   ",
            output:"hello"
        },
        {
            input:["the orange box is here"],
            output:"Invalid"
        },
        {
            input:"I love coding",
            output:"coding"
        },

    ];
testcases.forEach((testcase,index) => {
    let outputOriginal = longestWord(testcase.input);
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