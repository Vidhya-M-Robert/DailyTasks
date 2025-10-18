function CheckAnagram(string1, string2){
    let strNew1 = string1.toLowerCase().split("").sort().join('');
    let strNew2 = string2.toLowerCase().split("").sort().join('');
    if(strNew1.length !== strNew2.length) return false
    const anagram = strNew1 === strNew2 ? "true" : "false"
    return anagram;
}
console.log(CheckAnagram("listen", "silent"));
console.log(CheckAnagram("restful", "fluster"));
console.log(CheckAnagram("hello", "world"));



