function templateParser(str, obj) {
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    var replace = str.replaceAll("{", "");
    var replace2 = replace.replaceAll("}", "");
    var split = replace2.split(" ");
    console.log(split);
    for (var i = 0; i < split.length; i++) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
                var value = values_1[_a];
                if (split[i] === key) {
                    split[i] = value[key];
                }
            }
        }
    }
    return split;
}
console.log(templateParser("Hello {{name}}, you have {{count}} new messages.", { name: "John", count: 3 }));
