"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyzeHeatmap = AnalyzeHeatmap;
function AnalyzeHeatmap(heatmap) {
    if (!Array.isArray(heatmap) || heatmap.length === 0) {
        return { maxTemp: "Invalid", minTemp: "Invalid", averageTemp: "Invalid", hottestPoint: "Invalid", coldestPoint: "Invalid" };
    }
    var newArr = [];
    var maxTemp;
    var minTemp;
    var averageTemp;
    var hottestPoint;
    var coldestPoint;
    for (var i = 0; i < heatmap.length; i++) {
        if (heatmap[i].length === 0 || !Array.isArray(heatmap[i])) {
            return "Invalid";
        }
        newArr.push(heatmap[i]);
    }
    var flatted = newArr.flat().map(Number);
    var length = flatted.length;
    // console.log(length);
    maxTemp = Math.max.apply(Math, flatted);
    // console.log(maxTemp);
    minTemp = Math.min.apply(Math, flatted);
    var sum = flatted.reduce(function (acc, curr) { return acc + curr; });
    averageTemp = Number((sum / length).toFixed(1));
    // console.log(averageTemp);
    for (var i = 0; i < heatmap.length; i++) {
        for (var j = 0; j < heatmap[i].length; j++) {
            // console.log(heatmap[i][j])
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
    return { maxTemp: maxTemp, minTemp: minTemp, averageTemp: averageTemp, hottestPoint: hottestPoint, coldestPoint: coldestPoint };
}
console.log(AnalyzeHeatmap([[28, 46, 59], [19, 73], [32, 54, 23, 32, 52], [7, 43]]));
