"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectstoSingleObject = objectstoSingleObject;
function objectstoSingleObject(arr) {
    var newObj = {};
    for (var i = 0; i < arr.length; i++) {
        var keys = Object.values(arr[i]);
        // console.log(keys);
        newObj[keys[0]] = keys[1];
    }
    return newObj;
}
console.log(objectstoSingleObject([{ key: 0, value: "hello" }, { key: 2, value: "hai" }]));
