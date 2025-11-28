export function EuclideanAlgo(a: number,b: number){
  while(b!==0){
    if(a<b){
    let temp = a;
    a=b;
    b=temp;
  }
  let rem = a%b;
  if(rem === 0){
    return b
  }
  else{
    a = b;
    b=rem;
  }
  }
}
console.log(EuclideanAlgo(0,18))