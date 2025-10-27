function highestIncreasingOrder(arr){
    let newArr = [];
    let lastElement = arr[arr.length-1];
    for(let i = 0; i<arr.length;i++){
        if(arr[i] <= arr[i+1]){
            newArr.push(arr[i]);
            // console.log(newArr);
        }
    }
    const lastOfNew = newArr[newArr.length-1];
    if(lastElement > lastOfNew){
        newArr.push(lastElement);
        console.log(newArr); 
    }
}
highestIncreasingOrder([10, 20, 15, 30, 22, 40]);
highestIncreasingOrder([10,2,5,3,7]);
highestIncreasingOrder([2,0,9,3,4,7,8]);
highestIncreasingOrder([6, 9, 2, 0, 5, 7, 8, 2, 8]);
