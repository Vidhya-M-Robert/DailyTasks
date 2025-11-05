function reverseVowels(str){
   let vowels = [];
   for(let i=0;i<str.length;i++){
    if(str[i].includes("A") || str[i].includes("E") || str[i].includes("I") || str[i].includes("O") || str[i].includes("U")|| str[i].includes("a")|| str[i].includes("e")|| str[i].includes("i")|| str[i].includes("o")|| str[i].includes("u")){
        vowels.push(str[i]);
    }
   }
   console.log(vowels);
}
reverseVowels("IceCreAm");