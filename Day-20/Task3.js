// Not Complete
function SortMixedNested(arr) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (Array.isArray(item)) {
            result.push.apply(result, SortMixedNested(item));
        }
        else {
            result.push(item);
        }
    }
    result.sort(function (a, b) { return a - b; });
    return result;
}
console.log(SortMixedNested([3, [2, [5, 1]], 4]));
