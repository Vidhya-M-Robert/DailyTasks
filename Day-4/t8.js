function ProductofThreeNumbers(arr){
    let sortArray = arr.sort((a,b) =>(b-a)).slice(0,3);
    // console.log(sortArray);
    const product = sortArray.reduce((curr,acc)=>curr * acc)
    console.log(product);
}
ProductofThreeNumbers([1, 2, 3, 4]);
ProductofThreeNumbers([-4, -3, -2, -1, 0]);
ProductofThreeNumbers([-1, -2, -3, -4, -5]);



