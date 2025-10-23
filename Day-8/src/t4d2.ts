function checkAnagram(str1 : string, str2: string){
    let newStr1 = str1.toLowerCase().split("").sort().join('');
    let newStr2 = str2.toLowerCase().split("").sort().join('');
    if(newStr1.length !==newStr2.length) return false
    const anagram = newStr1 === newStr2 ? true : false;
    return anagram; 
}
console.log(checkAnagram("listen","silent"));
console.log(checkAnagram("restful","fluster"));
console.log(checkAnagram("hello","world"));

