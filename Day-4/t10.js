function checkEmailValidate(str){
    const strContain = str.includes(".com") && str.includes("@") ? "true" : "false"
    return strContain;
}
console.log(checkEmailValidate("test@example.com"));
console.log(checkEmailValidate("invalid.email.com"));
console.log(checkEmailValidate("user@domain"));