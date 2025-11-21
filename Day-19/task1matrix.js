function DetectSymmetry(matrix) {
    var newArr = [];
    var lastRow = [];
    var horizon;
    var n = matrix.length;
    for (var i = 0; i < matrix.length; i++) {
        newArr.push(matrix[0][i]);
        // console.log(newArr);
        lastRow.push(matrix[n - 1][i]);
        // console.log(lastRow);
    }
    horizon = JSON.stringify(newArr) === JSON.stringify(lastRow) ? true : false;
    // console.log(horizon);
    var newCol = [];
    var lastCol = [];
    var vertical;
    for (var i = 0; i < matrix.length; i++) {
        newCol.push(matrix[i][0]);
        // console.log(newArr);
        lastCol.push(matrix[i][n - 1]);
        // console.log(lastRow);
    }
    vertical = JSON.stringify(newCol) === JSON.stringify(lastCol) ? true : false;
    // console.log(vertical)
    return { vertical: vertical, horizontal: horizon };
}
// console.log(newObj)
console.log(DetectSymmetry([[3, 4, 2], [2, 1, 3], [3, 4, 2]]));
console.log(DetectSymmetry([[3, 3, 3], [3, 3, 3]]));
console.log(DetectSymmetry([[1, 3, 2], [3, 4, 1], [5, 4, 2], [3, 5, 6]]));
