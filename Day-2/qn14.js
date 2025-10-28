function checkPalindrome(str){
    let strLower = str.toLowerCase();
    let reversed = strLower.split('').reverse().join('');
    const result=strLower === reversed ? "true":"false"
    return result
}
console.log(checkPalindrome("A man, a plan, a canal, Panama!"));
console.log(checkPalindrome("Racecar"));
console.log(checkPalindrome("Hello, world!"));