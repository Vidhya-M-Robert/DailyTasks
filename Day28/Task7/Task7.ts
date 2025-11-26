export function urlQuerytoParams(str: string){
    if(str.length === 0){
        return "Invalid"
    }
    if(!str.includes("&") ||str.includes("&&")){
        return "Invalid"
    }
     if(!str.includes("=")){
        return "Invalid"
    }
    let res = {};
    let splitEach;
    let replaced = str.replaceAll("?","");
    let splitted = replaced.split("&");
    // console.log(splitted);
    for(let i=0;i<splitted.length;i++){
        splitEach = splitted[i].split("=");
        // console.log(splitEach);
        res[splitEach[0]] = splitEach[1];
    }
    return res;
}

console.log(urlQuerytoParams("?name=John&age=20&active=true"));
