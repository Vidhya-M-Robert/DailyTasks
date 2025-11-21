"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortByScoreRank = SortByScoreRank;
function SortByScoreRank(data) {
    if (!Array.isArray(data)) {
        return "Invalid";
    }
    var sortedScore = data.sort(function (a, b) { return b - a; });
    console.log(sortedScore);
    var rank = 0;
    var newArr = [];
    for (var i = 0; i < sortedScore.length; i++) {
        rank++;
        newArr.push({ score: sortedScore[i], rank: rank });
    }
    for (var i = 0; i < sortedScore.length; i++) {
        for (var j = i + 1; j < sortedScore.length; j++) {
            if (sortedScore[i] === sortedScore[j]) {
                newArr[j].rank = newArr[i].rank;
            }
            else {
                newArr[j].rank = newArr[i].rank + 1;
            }
        }
    }
    return newArr;
}
console.log(SortByScoreRank([90, 2, 45]));
