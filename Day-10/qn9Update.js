function emailValid(email){
    if(email.includes(" ")) return false;
    for(let i=0; i < email.length; i++){
        const char = email[i];
        if(char >= "A" && char <= "Z"){
            return false;
        }
    }
    const result = email.split("@")
    if(result.length != 2) return false;
    const [first,second] = result
    if(!first || !second) return false;
    if(!second.includes(".")) return false;
    if(second.startsWith(".") || second.endsWith(".")) return false;
    const secondHalf = second.split(".")
    const lastPart = secondHalf[secondHalf.length-1]
    if (lastPart.length < 2) return false;
    return true;
}
console.log(emailValid("harRy12@gmail.com"));