function checkPerfectSquare(num){
  for (let i = 0; i < num ; i++){
    if(i * i === num){
      return true
    }
  }
  return false

}
console.log(checkPerfectSquare(16));
console.log(checkPerfectSquare(10));
console.log(checkPerfectSquare(25));


