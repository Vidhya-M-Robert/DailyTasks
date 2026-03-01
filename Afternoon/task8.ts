export function isEven(num: number): string{
    if(num <= 0 || (!Number.isInteger(num))){
        return "Invalid"
    }
    let num1: number = Math.floor(num/2);
    if(num/2 !== num1){
        return `${num} is not an Even Number`
    }
    else{
        return `${num} is an Even Number`
    }
}
console.log(isEven(7));
