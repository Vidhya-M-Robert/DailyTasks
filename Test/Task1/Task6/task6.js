var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function stringCompression(strs, keye) {
    var count = {};
    var temp = [];
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var str = strs_1[_i];
        count[str] = (count[str] || 0) + 1;
    }
    var keys = Object.keys(count);
    var values = Object.values(count);
    for (var i = 0; i < keys.length; i++) {
        for (var j = 0; j < values.length; j++) {
            if (keye === "encrypt") {
                temp.push(keys[i], values[i]);
            }
        }
    }
    var remove = __spreadArray([], new Set(temp), true);
    var string = remove.toString().replaceAll(",", "");
    return string;
}
console.log(stringCompression("aaabbbbcc", "encrypt"));
