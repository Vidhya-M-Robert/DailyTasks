function printPattern(n){
    let letters = [];
    for(let i=65; i<=90; i++){
        letters.push(i);
    }
    for(let i=0;i<n;i++){
        console.log(String.fromCharCode(letters[i]).repeat(i+1).split("").join(" ")); 
    }
}
printPattern(8);