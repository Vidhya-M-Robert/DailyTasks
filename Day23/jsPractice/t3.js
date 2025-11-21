// function seperatorForNumber(num){
//     let str = String(num);
//     let check;
//     if(str.length < 4){
//         return num;
//     }
//     else{
//         str.replace()
//     }
//     return str;
// }
// // console.log(seperatorForNumber(1234567));
// console.log(seperatorForNumber(1000));
// console.log(seperatorForNumber(100));

function addSeparator(num) {
  let str = String(num);

  if (str.length <= 3) return str;

  
  let last3 = str.slice(-3);

  let remaining = str.slice(0, -3);

  let parts = [];
  while (remaining.length > 2) {
    parts.unshift(remaining.slice(-2));
    remaining = remaining.slice(0, -2);
  }

  parts.unshift(remaining);

  return parts.join(",") + "," + last3;
}

console.log(addSeparator(1234567)); 