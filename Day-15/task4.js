function addOnetoArray(arr) {
    if(!Array.isArray(arr) || arr === ""){
        return "Invalid Entry"
    }
    for(let i=0;i< arr.length;i++){
        if(typeof (arr[i]) !== "number"){
            return "Invalid Entry"
        }
    }
  let value = [];
  let string = arr.toString();
  let num = Number(string.replaceAll(",", ""));
  num = num + 1;
  let final = num.toString().split("");
  for (let i = 0; i < final.length; i++) {
    value.push(Number(final[i]));
  }
  return value;
}
// console.log(addOnetoArray(["1","2","3"]));

function testCases() {
  const testcases = [
    {
      input: [1, 2, 3],
      output: [1,2,4],
    },
    {
      input: "",
      output: "Invalid Entry",
    },
    {
      input: "123",
      output: "Invalid Entry",
    },
    {
      input: [980],
      output: [9, 8, 1],
    },
    {
      input: [0],
      output:[1],
    },
    {
      input: "hello",
      output: "Invalid Entry",
    },
    {
      input: true,
      output: "Invalid Entry",
    },
    {
      input: 89,
      output: "Invalid Entry",
    },
    {
      input: [1,0,2,4],
      output: [1,0,2,5],
    },
    {
      input: {},
      output: "Invalid Entry",
    },
    {
      input: ["1","2","3"],
      output: "Invalid Entry",
    },
    {
      input: { name: "race" },
      output: "Invalid Entry",
    },
    {
      input: NaN,
      output: "Invalid Entry",
    },
    {
        input:[9],
        output:[1,0]
    },
    {
        input:[9,9,9],
        output:[1,0,0,0]
    }
  ];
  testcases.forEach((testcase, index) => {
    let outputOriginal = addOnetoArray(testcase.input);
    let status = "pass";
    if (Array.isArray(outputOriginal)) {
      if (outputOriginal.length === testcase.output.length) {
        for (let i = 0; i < outputOriginal.length; i++) {
          if (outputOriginal[i] !== testcase.output[i]) {
            status = "Fail";
            break;
          }
        }
      } else {
        status = "Fail";
      }
    } else {
      status = outputOriginal === testcase.output ? "Pass" : "Fail";
    }
    let show = `
    Testcase ${index + 1} ${status}
    Expected: ${testcase.output}
    Got:${outputOriginal}
    `;
    console.log(show);
  });
}
testCases();
