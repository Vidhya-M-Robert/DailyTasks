function longestWord(str){
    const words = str.split(" ");
    console.log(words);
    let newWord = "";

    for(let word of words){
        if(word.length >= newWord.length)
         newWord = word;

    } 
    console.log(newWord)
}
longestWord("hello world of programming");
longestWord("The quick brown fox jumps over the lazy dog");
longestWord("I love coding");
