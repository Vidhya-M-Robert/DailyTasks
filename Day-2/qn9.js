function EmailValidate(str){
    const included = str.includes("@") && str.includes(".com") ? "true" : "false"
    return included;
}
console.log(EmailValidate("test@example.com"));
console.log(EmailValidate("invalid.email.com"));
console.log(EmailValidate("user@domain"));

