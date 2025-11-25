"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjtoQuery = ObjtoQuery;
function ObjtoQuery(obj) {
    if (Object.keys(obj).length === 0) {
        return "Invalid";
    }
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    var result = "";
    for (var i = 0; i < keys.length; i++) {
        result += "".concat(keys[i], " = ").concat(values[i], "&");
    }
    var sliced = result.slice(0, -1);
    return sliced;
}
console.log(ObjtoQuery({ name: "John" }));
