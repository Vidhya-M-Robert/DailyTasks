export function snakeTocamel(str: string):string{
    if(str === ""){
        return "Invalid"
    }
    let result = "";
    for(let i=0; i< str.length;i++){
        if(str[i] === "_"){
            i++;
            result += str[i].toUpperCase();
        }
        else
        {
            result += str[i];
        }
    }
    return result;
}
console.log(snakeTocamel(""));