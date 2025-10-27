const Person = {
    firstName: "John",
    lastName: "Doe",
    birthYear: 1990,

getFullName(){
    console.log(`${Person.firstName} ${Person.lastName}`);
},
currentAge(){
    const now = new Date().getFullYear();
    const ageNow = now - Person.birthYear;
    console.log(ageNow);
    // return ageNow;
}
} 
Person.getFullName();
Person.currentAge();