function emailValid(email){
    let reg = /[!#$%^&*()]/
    if(typeof(email) !== "string"){
        return "Invalid"
    }
    if(email.includes(" ") || email.includes("!"||"#"||"$"||"%"||"^"||"&"||"*"||"("||")")) return false;
    for(let i=0; i < email.length; i++){
        const char = email[i];
        if(char >= "A" && char <= "Z"){
            return false;
        }
    }
    const result = email.split("@")
    if(result.length != 2) return false;
    const [first,second] = result
    if(!first || !second) return false;
    if(!second.includes(".")) return false;
    if(second.startsWith(".") || second.endsWith(".")) return false;
    const secondHalf = second.split(".")
    const lastPart = secondHalf[secondHalf.length-1]
    if (lastPart.length < 2) return false;
    return true;
}
console.log(emailValid(['vmr29@gmail.com']));

function testCases(){
    const testcases = [
        {
            input:"test@example.com",
            output:true
        },
        {
            input:" ",
            output:false
        },
        {
            input:[],
            output:"Invalid"
        },
        {
            input:['vmr29@gmail.com'],
            output:"Invalid"
        },
        {
            input:123,
            output:"Invalid"
        },
        {
            input:"harry12@gmail.com",
            output: true
        },
        {
            input:{},
            output:"Invalid"
        },
        {
            input:"Harry@gamil.com",
            output: false
        },
        {
            input:"ad@",
            output:false
        },
        {
            input:"invalid.email.com",
            output:false
        },
        {
            input:undefined,
            output:"Invalid"
        },
        {
            input:"john   12@gmail.com",
            output:false
        },
        {
            input:"noahgmail.com",
            output:false
        },
        {
            input:"clare!12@gmail.com",
            output:false
        },
        {
            input:"user@domain",
            output:false
        },

    ];
testcases.forEach((testcase,index) => {
    let outputOriginal = emailValid(testcase.input);
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