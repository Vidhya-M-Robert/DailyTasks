"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyzeHeatmap = AnalyzeHeatmap;
function AnalyzeHeatmap(heatmap) {
    var newArr = [];
    var hottestPoint;
    var coldestPoint;
    var maxTemp;
    var minTemp;
    newArr.push(__spreadArray([], heatmap, true));
    var flatted = newArr.flat(Infinity);
    // console.log(flatted);
    var leng = flatted.length;
    // console.log(leng);
    maxTemp = Math.max.apply(Math, flatted);
    // console.log(maxTemp);
    minTemp = Math.min.apply(Math, flatted);
    // console.log(minTemp);
    var Avg = (flatted.reduce(function (a, b) { return a + b; }) / leng).toFixed(1);
    var numAvg = Number(Avg);
    for (var i = 0; i < heatmap.length; i++) {
        for (var j = 0; j < heatmap[i].length; j++) {
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
    return { maxTemp: maxTemp, minTemp: minTemp, averageTemp: numAvg, hottestPoint: hottestPoint, coldestPoint: coldestPoint };
}
console.log(AnalyzeHeatmap([[92, 42, 93], [10, 15, 107], [92, 10, 120]]));
