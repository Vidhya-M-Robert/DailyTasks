function stringCompression(strs, keye){
    let count = {};
    let temp = [];
    for(let str of strs){
        count[str] = (count[str] || 0) + 1
    }
    let keys = Object.keys(count);
    let values = Object.values(count);
    for(let i=0;i< keys.length;i++){
        for(let j=0;j<values.length;j++){
             if (keye === "encrypt"){
               temp.push(keys[i],values[i]) 
            }
        }
    }
    let remove =[...new Set(temp)];
    let string = remove.toString().replaceAll(",","");
    return string;

}
console.log(stringCompression("aaabbbbcc","encrypt"));