function Productoflargest(arr){
    let sortedArray = arr.sort((a,b)=>b-a);
    const largest = sortedArray.slice(0,3);
    const product = largest.reduce((curr,acc) => acc*curr,1);
    return product;
}
console.log(Productoflargest([-1, -2, -3, -4, -5]));
console.log(Productoflargest([-4, -3, -2, -1, 0]));
console.log(Productoflargest([1, 2, 3, 4]));