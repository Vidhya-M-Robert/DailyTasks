// const students = [
//   { name: "chr is", marks: 50 },
//   { name: "evans", marks: 49 },
//   { name: "tony", marks: 51 },
// ];
function updateStatus(students){
  const newArray = [];
  for (let i = 0; i < students.length; i++){
    let studentName = students[i].name;
    let studentMarks = students[i].marks;
    let marksPop = [studentName, studentMarks];
    // marksPop.pop();
  if (studentName === "" || studentName == null || typeof(studentName) !== "string") {
    return "Invalid";
  }
  if (studentMarks == null || typeof(studentMarks) !== "number") {
    return "Invalid";
  }
    if (students[i].marks < 0) {
      return "Negative Marks are not allowed";
    } else if (students[i].marks > 100) {
      return "Marks out of boundary";
    } 
    else {
      if (students[i].marks < 50 && students[i].marks >= 0) {
        students[i].status = "Fail";
        marksPop.push("Fail");
      } else {
        students[i].status = "Pass";
        marksPop.push("Pass");
      }
      let studentStatus = students[i].status;
      newArray.push({ name: studentName, status: studentStatus });
    }
  }
  return newArray;
  // console.log(newArray);
}
// console.log(updateStatus(students));
function testCases() {
  const testcase = [
    {
      input: [
        { name: "Harry", marks: 0 },
        { name: "Clair", marks: 7 },
        { name: "Ram", marks: 90 },
      ],
      output: [
        { name: "Harry", status: "Fail" },
        { name: "Clair", status: "Fail" },
        { name: "Ram", status: "Pass" },
      ],
    },
    {
      input: [
        { name: "chris", marks: 50 },
        { name: "evans", marks: 49 },
        { name: "tony", marks: 51 },
      ],
      output: [
        { name: "chris", status: "Pass" },
        { name: "evans", status: "Fail" },
        { name: "tony", status: "Pass" },
      ],
    },
    {
      input: [
        { name: "", marks: 50 },
        { name: "Stark", marks: 23 },
        { name: "perter", marks: 51 },
      ],
      output: "Invalid",
    },
    {
      input: [
        { name: "parker", marks: 8 },
        { name: "potter", marks: -49 },
        { name: "Toby", marks: 51 },
      ],
      output: "Negative Marks are not allowed",
    },
    {
      input: [
        { name: "Joe", marks: 50 },
        { name: "Ron", marks: 4949 },
        { name: "Weasly", marks: 51 },
      ],
      output: "Marks out of boundary",
    },
    {
      input: [
        { name: "chr is", marks: 50 },
        { name: "evans", marks: 49 },
        { name: "tony", marks: 51 },
      ],
      output: [
        { name: "chr is", status: "Pass" },
        { name: "evans", status: "Fail" },
        { name: "tony", status: "Pass" },
      ],
    },
     {
      input: [
        { name: "chris", marks: 50},
        { marks: 49 },
        { name: "tony", marks: 51 },
      ],
      output: "Invalid"
    },
    {
      input: [
        { name: "chris", },
        { name: "evans", marks: 49 },
        { name: "tony", marks: 51 },
      ],
      output: "Invalid"
    },
    {
      input: [],
      output: [],
    },
    {
      input: [
        { name: "Harry",   },
        { name: "", marks: 7 },
        { name: "", marks: 90 },
      ],
      output: "Invalid"
    },
    {
      input: [
        { name: "Harry", marks: 0},
        { name: "Clair", marks: 7},
        { name: "Ram", marks: "were"},
      ],
      output: "Invalid"
    },
     {
      input: [
        { name: "chris", marks: 0},
        { name: "evans", marks: 7},
        { name: "tony", marks: 12},
      ],
      output: [
        { name: "chris", status: "Fail"},
        { name: "evans", status: "Fail"},
        { name: "tony", status: "Fail"},
      ],
    },
     {
      input: [
        { name: "chris", marks: 0},
        { name: "evans", marks: 0},
        { name: "tony", marks: 0},
      ],
      output: [
        { name: "chris", status: "Fail"},
        { name: "evans", status: "Fail"},
        { name: "tony", status: "Fail"},
      ],
    },
     {
      input: [
        { name: "chris", marks: 0},
        { name: "evans", marks: 7},
        { name: "tony", marks: -12},
      ],
      output: "Negative Marks are not allowed"
    },
     {
      input: [
        { name: "chris", marks: 0 },
        { name: "evans", marks: 7 },
        { name: "tony"  },
      ],
      output: "Invalid"
    },
  ];
  for (let i = 0; i < testcase.length; i++) {
    const test = testcase[i];
    const result = updateStatus(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.output);
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.output);
      console.log("Got:", result);
    }
  }
}
testCases();