function numberToText(num) {
    if(!Number.isInteger(num)){
        return "Invalid"
    }
    if(num < 0){
        return "Invalid"
    }
    const ones = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    const teens = ["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
    const tens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];

    if(num < 10) return ones[num];
    if(num < 20) return teens[num - 10];
    if(num < 100) {
        let ten = Math.floor(num / 10);
        let one = num % 10;
        return one === 0 ? tens[ten] : `${tens[ten]} ${ones[one]}`;
    }
    if(num < 1000) {
        let hundred = Math.floor(num / 100);
        let rest = num % 100;
        if (rest === 0) return `${ones[hundred]} hundred`;
        return `${ones[hundred]} hundred and ${numberToText(rest)}`;
    }
    return "Number out of range";
}
console.log(numberToText(0));
// console.log(numberToText(400));
// console.log(numberToText(99));
// console.log(numberToText(6));
// console.log(numberToText(999)); 


function testCases(){
    const testcases = [
        {
            input: 567,
            output: "Five hundred and Sixty Seven"
        },
        {
            input: "",
            output: "Invalid"
        },
        {
            input: "Five hundred and Sixty Seven",
            output: "Invalid"
        },
        {
            input: 0,
            output: "Zero"
        },
        {
            input: ["567"],
            output: "Invalid"
        },
        {
            input: true,
            output: "Invalid"
        },
        {
            input: 90,
            output: "Ninety"
        },
        {
            input: {},
            output: "Invalid"
        },
        {
            input: 56.7,
            output: "Invalid"
        },
        {
            input: 999,
            output: "Nine hundred and Ninety Nine"
        },
        {
            input: null,
            output: "Invalid"
        },
        {
            input: 1024,
            output: "Number out of range"
        },
        {
            input: "23",
            output: "Invalid"
        },
        {
            input: 723,
            output: "Seven hundred and Twenty Three"
        },
        {
            input: -234,
            output: "Invalid"
        },
    ];

 testcases.forEach((testcase,index) => {
        let outputOriginal = numberToText(testcase.input);
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