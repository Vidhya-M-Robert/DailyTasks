function tosnakeCase(str){
     if(typeof(str) !== "string"){
        return "Invalid"
    }
    if(str === "" || str === null){
        return "Empty"
    }
    str = str.replaceAll(/[!@#$%^&*()><?_+.,';/]/g,"");
    str = str.trim().replace(/\s+/g, "");
    const capitalLetter = /[A-Z]/g
    let transformedText = str.replaceAll(capitalLetter,"_"+"$&");
    // console.log(transformedText);
    const lowered = transformedText.toLowerCase();
    return lowered
}
console.log(tosnakeCase( 'my Car There'));

function testCases(){
    const testcases = [
        {
            input: "myFunction",
            output: "my_function"
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
            output: "my_function"
        },
        {
            input: {},
            output: "Invalid"
        },
        {
            input: "my Car There",
            output: "my_car_there"
        },
        {
            input: true,
            output: "Invalid"
        },
        {
            input: "hello Word",
            output: "hello_word"
        },
        {
            input: "my!Car",
            output: "my_car"
        },
        {
            input: [],
            output: "Invalid"
        },
       
        {
            input: "hello At everyone",
            output: "hello_ateveryone"
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
            input: "hey He llo!",
            output: "hey_hello"
        },

    ];
   testcases.forEach((testcase,index) => {
        let outputOriginal = tosnakeCase(testcase.input);
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