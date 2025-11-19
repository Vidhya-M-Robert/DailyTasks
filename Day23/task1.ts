export function rotateMatrix(matrix: number[][]){
    let res: number[][] = [];
    let rows = matrix.length;
    let cols = matrix[0].length;
    for(let k=0;k<rows;k++){
        if(matrix[k].length !== matrix[k+1].length || matrix[k].length === 0){
            return "Invalid"
        }
   
    for(let i=0;i<cols;i++){
        let newRow: number[] = [];
        for(let j=0;j<rows;j++){
            newRow.push(matrix[j][i]);
        }
        newRow.reverse();
        res.push(newRow);
    }
    return res
    }
}
// console.log(rotateMatrix([
// [1,2,3],
// [4,5,6],
// [7,8,9]]))

console.log(rotateMatrix([[4,2,6],[7,9,3]]))