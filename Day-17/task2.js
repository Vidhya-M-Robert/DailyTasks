function SortByKey(arr, key, order) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var keys = Object.keys(arr[i]);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var keey = keys_1[_i];
            if (keey === key) {
                newArr.push(arr[i]);
            }
        }
    }
    if (order === 'asc') {
        newArr.sort(function (a, b) {
            return (a[key]) - (b[key]);
        });
    }
    if (order === "desc") {
        newArr.sort(function (a, b) {
            return (b[key]) - (a[key]);
        });
    }
    return newArr;
}
console.log(SortByKey([{ age: 30 }, { age: 20 }], 'age', 'desc'));
console.log(SortByKey([{ age: 30 }, { age: 20 }], 'age', 'asc'));
