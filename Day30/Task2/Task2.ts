export function SieveEratosthenes(n: number){
  let newArr = [];
  for(let i=2;i<=n*n;i++){
    newArr.push(i);
  }
  for(let k=2;k<newArr.length;k++){
  for(let j=k;j<newArr.length;j++){
    if(newArr[j] % k === 0){
      newArr.splice(j,1);
    }
  }
}
 return newArr.slice(0,n);
}
console.log(SieveEratosthenes(50));