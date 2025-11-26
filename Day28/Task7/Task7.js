"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlQuerytoParams = urlQuerytoParams;
function urlQuerytoParams(str) {
    if (str.length === 0) {
        return "Invalid";
    }
    if (!str.includes("&") || str.includes("&&")) {
        return "Invalid";
    }
    if (!str.includes("=")) {
        return "Invalid";
    }
    var res = {};
    var splitEach;
    var replaced = str.replaceAll("?", "");
    var splitted = replaced.split("&");
    // console.log(splitted);
    for (var i = 0; i < splitted.length; i++) {
        splitEach = splitted[i].split("=");
        // console.log(splitEach);
        res[splitEach[0]] = splitEach[1];
    }
    return res;
}
console.log(urlQuerytoParams("?name=John&age=20&active=true"));
console.log(urlQuerytoParams("?name=John"));
console.log(urlQuerytoParams("true?"));
console.log(urlQuerytoParams("name=John&age=20"));
console.log(urlQuerytoParams("?name=John&&age=20"));
