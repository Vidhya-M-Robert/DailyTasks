function longestWord(list){
    let longest = list[0]
    for(let i = 0; i < list.length; i++){
        if(longest.length < list[i].length){
            longest = list[i];
        }
    }
    return longest
}
console.log(longestWord(["cat", "dog", "elephant", "tiger"]));
console.log(longestWord(["apple", "banana", "orange"]));
console.log(longestWord(["programming", "is", "fun"]));
