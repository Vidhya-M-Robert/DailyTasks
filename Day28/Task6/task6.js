"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonKeys = commonKeys;
function commonKeys(obj1, obj2) {
    var newArr = [];
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    for (var i = 0; i < keys1.length; i++) {
        for (var j = 0; j < keys2.length; j++) {
            if (keys1[i] === keys2[j]) {
                newArr.push(keys1[i]);
            }
        }
    }
    return newArr;
}
console.log(commonKeys({ name: "Brad", age: "25" }, { name: "Titan", place: "mars" }));
