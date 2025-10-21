function wordFrequency(str){
    const ignored = /[,!]/g
    let stringTransform = str.replaceAll(ignored,"");
    let lower = stringTransform.toLowerCase();
    console.log(lower);
    let words = lower.split(" ");
    console.log(words);
    let count = {};
    for(let word of words){
        count[word] = (count[word] || 0) + 1;
    }
    return count;
}
console.log(wordFrequency("Hello hello world, world!"));
