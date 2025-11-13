export function AnalyzeHeatmap(heatmap: number[][]): {maxTemp: number|string, minTemp:number | string, averageTemp:number | string,hottestPoint:number[] | string,coldestPoint: number[] | string} | string{
     if(!Array.isArray(heatmap) || heatmap.length === 0){
        return {maxTemp: "Invalid", minTemp:"Invalid", averageTemp:"Invalid",hottestPoint:"Invalid",coldestPoint: "Invalid"};
    }
    let newArr: number[][] = [];
    let maxTemp: number;
    let minTemp: number;
    let averageTemp: number;
    let hottestPoint: number[];
    let coldestPoint: number[];
    for(let i=0;i<heatmap.length;i++){
        if(heatmap[i].length === 0 || !Array.isArray(heatmap[i])){
            return "Invalid"
        }
        newArr.push(heatmap[i]);
    }
    let flatted: number[] = newArr.flat().map(Number);
    let length: number = flatted.length;
    // console.log(length);
    maxTemp = Math.max(...flatted);
    // console.log(maxTemp);
    minTemp = Math.min(...flatted);
    let sum: number = flatted.reduce((acc,curr)=> acc+curr)
    averageTemp =Number((sum/length).toFixed(1));
    // console.log(averageTemp);
    for(let i=0;i<heatmap.length;i++){
        for(let j=0;j<heatmap[i].length;j++){
            // console.log(heatmap[i][j])
            if(heatmap[i][j] === maxTemp){
                if(!hottestPoint)
                hottestPoint = [i,j];
            }
            if(heatmap[i][j] === minTemp){
                if(!coldestPoint)
                coldestPoint = [i,j]; 
            }
        }
    }
    return{maxTemp: maxTemp, minTemp:minTemp, averageTemp:averageTemp,hottestPoint:hottestPoint,coldestPoint: coldestPoint};
}
console.log(AnalyzeHeatmap([[28,46,59],[19,73],[32,54,23,32,52],[7,43]]));
