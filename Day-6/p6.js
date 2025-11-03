function passWordString(str){
    if(str === "" || str === null){
        return "Empty"
    }
    if(typeof(str) !== "string"){
        return "Invalid"
    }
    // str = str.replaceAll(/[!@#$%^&*()><?_+.,';/]/g,"");
    str = str.trim().replace(/\s+/g,"");
    stringLength = str.length;
    if(stringLength < 6 && stringLength > 0){
        return "Your PassWord is Weak";
    }
    else if(stringLength < 8 && stringLength >=6){
        if((/[A-Z_a-z0-9]/g).test(str) && (/[0-9]/g).test(str) || (/[@#$^&*]/g).test(str)){
            return "Your password is Medium";
        }
        else{
            return "It doesn't contain necessary elements";
        }
    }
    else if(stringLength >= 8){
        if((/[A-Z]/g).test(str) && (/[a-z]/g).test(str) && (/[0-9]/g).test(str) && (/[@#$^&*]/g).test(str)){
        return "Your Password is Strong";
    }
    else{
            return "It doesn't contain necessary elements"
        }
    }
    else{
        return "Invalid Password";
    }
}
console.log(passWordString("smn     @109"));
function testCases(){
    const testcases = [
        {
            input:"Qwe@12",
            output:"Your password is Medium"
        },
        {
            input:" ",
            output: "Invalid Password"
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
            input:"Vmr@0007",
            output: "Your Password is Strong"
        },
        {
            input:{},
            output:"Invalid"
        },
        {
            input:"qwer@wert",
            output: "It doesn't contain necessary elements"
        },
        {
            input:"ad@",
            output:"Your PassWord is Weak"
        },
        {
            input:"",
            output:"Empty"
        },
        {
            input:undefined,
            output:"Invalid"
        },
        {
            input:"smn     @109",
            output: "Your password is Medium"
        },
        {
            input: null,
            output:"Empty"
        },
        {
            input:"c",
            output: "Your PassWord is Weak"
        },
        {
            input:"mne@121",
            output:"Your password is Medium"
        },
    ];
testcases.forEach((testcase,index) => {
    let outputOriginal = passWordString(testcase.input);
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