function isValidEmail(str){
    let str1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let array = str.split("");
    if(str.length === 0) return;
    for(let i = 0; i<str.length;i++){
    if(str1.includes(array[i])){
        console.log("Capitals are not allowed in Email")
        return;
    }
    }
    if(str.includes("@") && str.includes(".com")){
        console.log("It is a valid email")
    }
    else{
        console.log("Invalid email")
    }

}
isValidEmail("harRy12@gmail.com");


