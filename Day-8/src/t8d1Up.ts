function groupAnagrams(words: string[]): string[][]{
    const groups: { [key: string]: string[] } = {};

    for(const word of words){
        const sorted = word.split("").sort().join("");

        if(groups[sorted]){
            groups[sorted].push(word);
        }
        else{
            groups[sorted] = [word];
        }
    }
    return  Object.values(groups);
}
console.log(groupAnagrams(["care", "race", "acre", "dog", "god", "cat"]));
