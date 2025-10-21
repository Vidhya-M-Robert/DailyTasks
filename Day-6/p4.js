function printPattern(n){
    let newArr = [];
   for(let i=1; i<=n;i++){
        newArr.push(i);
   }
   for(let i =0; i<newArr.length;i++){
        let nextLine = "";
        for(let j=i; j<=i;j++){
            nextLine += newArr[j] + " ";
        }
        // console.log(nextLine);
        for(k=0;k<i;k++){
            nextLine += newArr[i]+ " ";
        }
        console.log(nextLine);
   }
}
printPattern(5);