function parseStringtoObject(str){
    let res = {};
    let splitEach;
    let splitted = str.split("&");
    console.log(splitted);
    for(let i=0;i<splitted.length;i++){
        splitEach = splitted[i].split("=");
        console.log(splitEach);
        res[splitEach[0]] = splitEach[1];
    }
    console.log(res);
}
parseStringtoObject("nanmee");
