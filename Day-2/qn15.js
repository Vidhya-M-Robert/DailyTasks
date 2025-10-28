function reverseString(str){
  const reverseOrder = str.split("").reverse().join("");
  const withoutOrderChange = reverseOrder.split(" ").reverse().join(" ");
  return withoutOrderChange
}

console.log(reverseString("Hello world"));
console.log(reverseString("Programmers are awesome"));
console.log(reverseString("Programming is fun"));