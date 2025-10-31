function findKebabCase(str){
     if(typeof(str) !== "string"){
        return "Invalid"
    }
    if(str === "" || str === null){
        return "Empty"
    }
    str = str.replaceAll(/[!@#$%^&*()><?_+.,';/]/g,"");
    str = str.trim().replace(/\s+/g, "");
    let Capitals = /[A-Z]/g
    let newText = str.replaceAll(Capitals,"-"+"$&").toLowerCase();
    return newText;
}
// findKebabCase('hey He llo!');

function testCases(){
    const testcases = [
        {
            input: "myFunction",
            output: "my-function"
        },
        {
            input: "hey He llo!",
            output: "hey-hello"
        },
        {
            input: "",
            output: "Empty"
        },
        {
            input: ["myfunction"],
            output: "Invalid"
        },
        {
            input: 123,
            output: "Invalid"
        },
        {
            input: "my Function",
            output: "my-function"
        },
        {
            input: {},
            output: "Invalid"
        },
        {
            input: "hello Word",
            output: "hello-word"
        },
        {
            input: true,
            output: "Invalid"
        },
        {
            input: "my!Car",
            output: "my-car"
        },
        {
            input: [],
            output: "Invalid"
        },
       
        {
            input: "hello At everyone",
            output: "hello-ateveryone"
        },
        {
            input: null,
            output: "Invalid"
        },
         {
            input: ["Racecar"],
            output: "Invalid"
        },
         {
            input: "my Car There",
            output: "my-car-there"
        },
        

    ];
   testcases.forEach((testcase,index) => {
        let outputOriginal = findKebabCase(testcase.input);
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