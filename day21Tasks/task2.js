"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatingArrangementsWithRoundTable = SeatingArrangementsWithRoundTable;
function SeatingArrangementsWithRoundTable(people) {
    if (people.length === 0 || typeof (people) !== "string") {
        return "Invalid";
    }
    var result = [];
    var peopleReplace = people.replaceAll(",", "");
    var length = peopleReplace.length;
    for (var i = 0; i < length; i++) {
        for (var j = i; j < length; j++) {
            result.push(peopleReplace[j]);
        }
        for (var k = 0; k < i; k++) {
            result.push(peopleReplace[k]);
        }
    }
    return result;
}
console.log(SeatingArrangementsWithRoundTable("A,B,C"));
