function textRepresent(num){
    let numStr = String(num).split("");
    console.log(numStr);
    let numl10 = {1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine",10:"Ten"};
    let numlty = {1:"Ten",2:"Twenty",3:"Thirty",4:"Fpurty",5:"Fifty",6:"Sixty",7:"Seventy",8:"Eighty",9:"Ninty"};
    if(num < 1000 && num > 110){
        // for(let i =0; i< numl10[i].length;i++){
            // for(let j =0; j<numlty[j].length;j++)
    //     return `${numStr[0]} hundred and ${numlty[j]} ${numl10[i]}`
    //     }
    }
}
textRepresent(723);