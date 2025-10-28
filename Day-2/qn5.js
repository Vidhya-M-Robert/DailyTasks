function frequencyOfCharacters(str){
    let count = 0;
    for(let i=0; i < str.length; i++){
        count++;
        return `{${str[i]}:${count}}`;
    }
    }
console.log(frequencyOfCharacters("hello"));