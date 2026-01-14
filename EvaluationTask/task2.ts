export function groupAnagrams(words: string[]): string[][] | string{
    if(!Array.isArray(words)){
        return "Invalid Entry";
    }
    for(let i=0;i<words.length;i++){
         if(typeof (words[i]) !== "string" || words[i].length === 0){
            return "Invalid";
        }
    }
    const result= {};
    for(const first of words){
        const sort = first.split("").sort().join("");
        // console.log(sort);
        if(result[sort]){
            result[sort].push(first);
            // console.log(result);
        }
        else{
            result[sort] = [first];
        }
    }
    let res: string[][] = Object.values(result);
    return res.sort((a,b)=>b.length-a.length);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
