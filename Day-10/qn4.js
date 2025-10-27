function groupAnagrams(words){
    const groups = {};
    for(const word of words){
        const checker = word.split("").sort().join("");
        if(groups[checker]){
            groups[checker].push(word);
        }
        else{
            groups[checker] = [word];
        }
        
    }
    const arrValues = Object.values(groups);
    const sorted = arrValues.sort((a,b)=>b.length-a.length);
    return sorted;
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));