// Import and create readline interface

const readline = require("readline"); //import Node's built-in readline module.[let's program to read input from the terminal and print output.]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// createInterface => creates a readline instance "rl"
// input: process.stdin => read from keyboard.
// output: process.stdout => print prompts to the terminal.
// rl => used later to ask qns and receive user input.

let employees = []; //js array to hold employee objects

function showMenu() {
  //prints the menu to the terminal
  console.log(`
        Employee Manager
        1. Add Employee
        2. List Employee
        3. Delete Employee
        4. Exit
        `);
  rl.question("Choose an option (1-4): ", handleMenu); //rl.question(prompt, callback) displays "prompt" and waits for the user to type something and press enter.
} //when user responds, handleMenu is called with the answer(as a string)

function handleMenu(choice) {
  ///process the users menu choice
  switch (
    choice.trim() //removes spaces/ newlines
  ) {
    case "1":
      addEmployee();
      break;
    case "2":
      listEmployees();
      break;
    case "3":
      deleteEmployee();
      break;
    case "4":
      rl.close(); //closes the readline interface -> this ends the program(stdin is released)
      break;
    default:
      console.log("Invalid choice. Try again.");
      showMenu();
  }
}
// choice is the string that user typed
// function addEmployee()
function addEmployee() {
  rl.question("Enter name:", (name) => {
    rl.question("Enter age:", (age) => {
      //age is stored as a string, if want it as a number => parseInt(age) or Number(age).
      rl.question("Enter role:", (role) => {
        employees.push({ name, age, role });
        console.log(`Added ${name} successfully!`);
        showMenu();
      });
    });
  });
}

// function listEmployee()
function listEmployees(){
    if(employees.length === 0){
        console.log("No employees found.");
    }
    else{
        console.log("\n Employee List");
        employees.forEach((emp,i) => {
            console.log(`${i+1}. ${emp.name} | Age: ${emp.age} | Role: ${emp.role}`);
        });
    }
    showMenu();
}
// function deleteEmployee()
function deleteEmployee(){
    rl.question("Enter the employee name you want to delete", (name) => {
        const index = employees.findIndex((e) => e.name.toLowerCase() === name.trim().toLowerCase());    //findIndex iterates the employees array and returns the index(0-based)of the first element for which the callback return true.if no element matches return -1.
        if(index !== -1){   // find someone
            employees.splice(index, 1);   // remove the employee found by findIndex()
            console.log(`Deleted ${name} successfully.`)
        }
        else{
            console.log("Employee not found.")
        }
        showMenu();
    });
}
// Start app
showMenu();
