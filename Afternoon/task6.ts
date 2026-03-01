function wordPattern(pattern: string,str: string):boolean{
    let alpha: string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let strinng: string[] = str.split(" ");
    let unique: string[] = [...new Set(strinng)]
    let newarr: string[] = [alpha[0]];
    // let strlength = strinng.length;
    let length:number = unique.length;
    let alphaSlice: string[] = alpha.slice(0,length);
    // console.log(alphaSlice);
    for(let i=0;i<strinng.length;i++){
        for(let k=i+1;k<strinng.length;k++){
        for(let j=0;j<alphaSlice.length;j++){
            if(JSON.stringify(strinng[i]) === JSON.stringify(strinng[k])){
                newarr.push(alphaSlice[j]);
            }
            else{
                newarr.push(alphaSlice[j+1]);
            }
        }
    }
    }
    // console.log(newarr);
    let joined = newarr.join("");
    console.log(joined);
    let res = joined === pattern ? true : false;
    return res;
}
console.log(wordPattern("abba","dog cat cat dog"));