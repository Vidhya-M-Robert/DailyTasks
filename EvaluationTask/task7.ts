function EmailValidation(email: string[][]){
    let arr1 = [];
    let arr2 =[];
    for(let i=0;i<email.length;i++){
    if(!email[i].includes("@")){
        arr1.push(email[i]);
    }
    else{
        arr2.push(email[i]);
    }
    }
    for(let i=0;arr2.length;i++){
    if(arr2[i].includes(" ")) return false;
    let split = arr2[i].split("@");
    if(split.length !== 2 || "") return false;
    const [part1,part2] = split;
    if((!part1) || part1.includes(""))return false;
    if((!part2) || part2.includes(""))return false;
    const subpart = part2.split(".");
    if(subpart.length !== 2) return false;
    }
return arr2;
}
console.log(EmailValidation(["test@mail.com", "abc", "ok@gmail.com"]));