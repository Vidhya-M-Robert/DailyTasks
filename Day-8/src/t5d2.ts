function letterFreq(str : string): object{
    let words = str.split("").join("").toLowerCase();
    let count: any = {};
    for(let word of words){
        count[word] = (count[word] || 0) + 1;
    }
    console.log(typeof count);
   return count;
}
console.log(letterFreq("hello"));