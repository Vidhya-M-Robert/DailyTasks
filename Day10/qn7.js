function numberToText(num) {
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
console.log(numberToText(567));
console.log(numberToText(400));
console.log(numberToText(99));
console.log(numberToText(6));
console.log(numberToText(999)); 
