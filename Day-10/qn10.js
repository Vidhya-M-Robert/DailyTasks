function longestCommonPrefix(arr){
  const sorted = arr.sort();
    let newArr1 = []; let newArr2 = [];
    let first = sorted[0]; let last = sorted[sorted.length-1];
    newArr1.push(first);
    newArr2.push(last);
    const splitted1 = newArr1.toString().split("");
    const splitted2 = newArr2.toString().split("");
    let resArr = [];
    for(let i=0;i<splitted1.length;i++){
      if(splitted1[0] !== splitted2[0]){
        return "";
      }
      else if(splitted1[i] === splitted2[i]){
        resArr.push(splitted1[i]);
      }
    }
    const string = resArr.toString();
    return string;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));



