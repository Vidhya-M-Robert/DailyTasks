function Partition(arr, fn) {
    if (arr === "" || fn === "") {
        return "Invalid";
    }
    if (typeof arr === "boolean") {
        return "Invalid";
    }
    if (!Array.isArray(arr)) {
        return "Invalid";
    }
    if (typeof fn !== "function") {
        return "Invalid";
    }
    var arr1 = [];
    var arr2 = [];
    var finalArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            arr1.push(arr[i]);
        }
        else {
            arr2.push(arr[i]);
        }
    }
    finalArr.push(arr1, arr2);
    return finalArr;
}
function testCases() {
    var testcases = [
        {
            input1: [1, 2, 3, 4],
            input2: function (x) { return x % 2 === 0; },
            output: [[2, 4], [1, 3]],
        },
        {
            input1: "",
            input2: "",
            output: "Invalid",
        },
        {
            input1: "",
            input2: 22,
            output: "Invalid",
        },
        {
            input1: [1, "2", 3, "4", "9"],
            input2: function (x) { return typeof x === "string"; },
            output: [["2", "4", "9"], [1, 3]],
        },
        {
            input1: "hello",
            input2: function (x) { return x % 2 === 0; },
            output: "Invalid",
        },
        {
            input1: true,
            input2: 14,
            output: "Invalid",
        },
        {
            input1: [1, 2, 3],
            input2: function (x) { return typeof x === "string"; },
            output: [[], [1, 2, 3]],
        },
        {
            input1: [10, 20, 30],
            input2: 99,
            output: "Invalid"
        },
        {
            input1: { name: "harry" },
            input2: function (x) { return x > 2; },
            output: "Invalid"
        },
        {
            input1: [7, 10, 27, 20],
            input2: function (x) { return x % 2 !== 0; },
            output: [[7, 27], [10, 20]]
        }
    ];
    testcases.forEach(function (testcase, index) {
        var result = Partition(testcase.input1, testcase.input2);
        var passed = JSON.stringify(result) === JSON.stringify(testcase.output);
        console.log("\nTestcase ".concat(index + 1, ": ").concat(passed ? "pass" : "fail"));
        console.log("Expected:", testcase.output);
        console.log("Got:     ", result);
    });
}
testCases();
