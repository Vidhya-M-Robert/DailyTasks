function Partition(arr: (string | number)[] | string | boolean | object,
fn: Function | string | number): (string | number)[][] | string {
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
  const arr1: (string | number)[] = [];
  const arr2: (string | number)[] = [];
  const finalArr: (string | number)[][] = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
        arr1.push(arr[i]);
        } else {
        arr2.push(arr[i]);
        }
    }
  finalArr.push(arr1, arr2);
  return finalArr;
}
function testCases() {
  const testcases = [
    {
      input1: [1, 2, 3, 4],
      input2: (x: number) => x % 2 === 0,
      output: [[2, 4],[1, 3]],
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
      input2: (x: number | string) => typeof x === "string",
      output: [["2", "4", "9"],[1, 3]],
    },
    {
      input1: "hello",
      input2: (x: number) => x % 2 === 0,
      output: "Invalid",
    },
        {
        input1: true,
        input2: 14,
        output: "Invalid",
        },
    {
      input1: [1, 2, 3],
      input2: (x: number | string) => typeof x === "string",
      output: [[], [1, 2, 3]], 
    },
     {
      input1: [10, 20, 30],
      input2: 99,                        
      output: "Invalid"
    },
    {
      input1: { name: "harry" },         
      input2: (x: number) => x > 2,
      output: "Invalid"
    },
    {
        input1: [7, 10, 27, 20],
        input2: (x: number) => x % 2 !== 0,
        output: [[7, 27], [10, 20]]
        }
  ];

  testcases.forEach((testcase, index) => {
    const result = Partition(testcase.input1, testcase.input2);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.output);
    console.log(`\nTestcase ${index + 1}: ${passed ? "pass" : "fail"}`);
    console.log("Expected:", testcase.output);
    console.log("Got:", result);
  });
}
testCases();