function isAnagram(str1, str2){
    let strNew1 = str1.toLowerCase().split("");
    let strNew2 = str2.toLowerCase().split("");
    if(strNew1.length !== strNew2.length) return false
    const sort1 = strNew1.sort().join('');
    const sort2 = strNew2.sort().join('');
    const anagram = sort1 === sort2 ? "true" : "false"
    return anagram;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("restful", "fluster"));
console.log(isAnagram("hello", "world"));

