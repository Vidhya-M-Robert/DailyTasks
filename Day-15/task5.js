// function twoDArray(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === 0){
//             let arir = arr.indexOf(arr[i])
//             console.log(arir);
//         }
//         console.log(arr[i]);
//     }
// }
// twoDArray([[1,1,1],[1,0,1],[1,1,1]]);

function zeromatrix(matrix){
    let rows = new Set();
    let cols = new Set();
    // for(let i=0;i<matrix.length;i++){
    //     for(let j=0;j<matrix[0].length;j++){
    //         matrix[i][j]===0
    //         rows.add(i);
    //         cols.add(j);
    //     }
    // }
    for(let row of matrix){
        const indi =  row.join(' ')
        console.log(indi);
    }
}
zeromatrix([[1,1,1],[1,0,1],[1,1,1]])