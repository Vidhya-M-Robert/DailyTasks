"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateMatrix = rotateMatrix;
function rotateMatrix(matrix) {
    var res = [];
    var rows = matrix.length;
    var cols = matrix[0].length;
    for (var k = 0; k < rows; k++) {
        if (matrix[k].length !== matrix[k + 1].length || matrix[k].length === 0) {
            return "Invalid";
        }
        for (var i = 0; i < cols; i++) {
            var newRow = [];
            for (var j = 0; j < rows; j++) {
                newRow.push(matrix[j][i]);
            }
            newRow.reverse();
            res.push(newRow);
        }
        return res;
    }
}
// console.log(rotateMatrix([
// [1,2,3],
// [4,5,6],
// [7,8,9]]))
console.log(rotateMatrix([[4, 2, 6], [7, 9, 3]]));
