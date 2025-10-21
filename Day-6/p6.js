function passWordString(str){
    stringLength = str.length;
    if(stringLength < 6){
        console.log("Your PassWord is Weak");
    }
    else if(stringLength < 8){
        if((/[A-Z_a-z0-9]/g).test(str) && (/[0-9]/g).test(str) || (/[@#$^&*]/g).test(str)){
            console.log("Your password is Medium");
        }
        else{
            console.log("It doesn't contain necessary elements")
        }
    }
    else if(stringLength >= 8){
        if((/[A-Z]/g).test(str) && (/[a-z]/g).test(str) && (/[0-9]/g).test(str) && (/[@#$^&*]/g).test(str)){
        console.log("Your Password is Strong");
    }
    else{
            console.log("It doesn't contain necessary elements")
        }
    }
    else{
        console.log("invalid Password");
    }
}
passWordString("Qwe@12");