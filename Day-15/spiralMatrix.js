function matrix(n){
    const result = []
    let counter = 1, startRow = 0, endrow = n-1, startcol = 0, endcol = n-1
    for(let i=0;i<n;i++){
        result.push([])
    }
  while(startRow <= endrow && startcol <= endcol){
      // Top
    for(let i=startcol;i<=endcol;i++){
        result[startRow][i] = counter
        counter++
    }
    startRow++; 
    // Right 
     for(let i=startRow;i<=endrow;i++){
        result[i][endcol] = counter
        counter++
    }
    endcol--; 

    // Bottom
    for(let i=endcol;i>=startcol;i--){
        result[endrow][i] = counter
        counter++
    }
    endrow--; 
    // Left
    for(let i=endrow;i>=startRow;i--){
        result[i][startcol] = counter
        counter++
    }
    startcol++;
  }


    return result;
}
console.log(matrix(3));