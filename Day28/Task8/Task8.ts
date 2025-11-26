export function replaceDigits(str : string): string{
    if(str.length === 0){
        return "Invalid"
    }
    const replaced = str.replaceAll(/\d/g,"#");
    return replaced;
}
console.log(replaceDigits(""));
replaceDigits("Room 45 on floor 3");