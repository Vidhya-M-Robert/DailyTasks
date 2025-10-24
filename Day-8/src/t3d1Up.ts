// const students: object = [
//   { name: "Alice", marks: 42 },
//   { name: "Bob", marks: 67 },
//   { name: "Charlie", marks: 35 },
// ];
// const result = [];
// for(let i =0; i<students.length;i++){
//     let status = students[i].marks >= 40 ? "Pass" : "Fail";
//     result.push({name: students[i].name,status});
// }
// console.log(result);

type Student = {name: string; marks: number};
type Result = {name: string; status: string};

const students: Student[] = [
    {name: "Alice", marks: 42},
    {name: "Bob", marks: 67},
    {name: "Charlie", marks: 35,}
];

const result: Result[] = [];

// for(let i = 0; i < students.length; i++){
//     const status = students[i]!.marks >= 50 ? "Pass" : "Fail";
//     result.push({name: students[i]!.name, status});
// }

for(const student of students){
    const status = student.marks >= 50 ? "Pass" : "Fail";
    result.push({name: student.name, status})
}
console.log(result);


