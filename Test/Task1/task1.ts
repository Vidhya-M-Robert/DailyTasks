export function AnalyzeHeatmap(heatmap: number[][]){
    let newArr = [];
    let hottestPoint;
    let coldestPoint;
    let maxTemp;
    let minTemp;
    newArr.push([...heatmap]);
    let flatted = newArr.flat(Infinity);
    // console.log(flatted);
    let leng = flatted.length;
    // console.log(leng);
    maxTemp = Math.max(...flatted);
    // console.log(maxTemp);
    minTemp = Math.min(...flatted);
    // console.log(minTemp);
    let Avg = (flatted.reduce((a,b)=> a+b)/leng).toFixed(1);
    let numAvg = Number(Avg);
    for(let i=0;i<heatmap.length;i++){
        for(let j=0;j<heatmap[i].length;j++){
            if (heatmap[i][j] === maxTemp) {
                if (!hottestPoint)
                    hottestPoint = [i, j];
            }
            if (heatmap[i][j] === minTemp) {
                if (!coldestPoint)
                    coldestPoint = [i, j];
            }
        }
}
return {maxTemp: maxTemp, minTemp: minTemp, averageTemp: numAvg, hottestPoint: hottestPoint, coldestPoint: coldestPoint}
}
console.log(AnalyzeHeatmap([[92,42,93],[10,15,107],[92,10,120]]));






