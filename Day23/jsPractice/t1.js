function rotateMatrix(matrix){
    let res = [];
    let rows = matrix.length;
    let cols = matrix[0].length;
    for(let i=0;i<cols;i++){
        let newRow = [];
        for(let j=0;j<rows;j++){
            newRow.push(matrix[j][i]);
        }
        newRow.reverse();
        res.push(newRow);
    }
    return res
}
console.log(rotateMatrix([
[1,2,3],
[4,5,6],
[7,8,9]]))