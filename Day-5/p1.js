//VARIABLES AND CONSTANTS

// p1
// let name = "Harry";
// let age = 20;
// let Adminstatus = true;
// console.log(`${name} is ${age}years old and his AdminStatus is ${Adminstatus}`);


// p2
// try{
// const x = 40;
// x=20; 
// console.log(x);
// }
// catch(error){
//     console.log("error caught");
// }

//p3
// let a = 10;
// let b = 20;
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a);
// console.log(b);

// p4
// var a = [10,20,30,40];
// let b = [20,40,60,80];

// for(var i =0; i<a.length;i++){
//     console.log(a[i]);
// }
// console.log(a[i]);
// for(let j = 0; j< b.length;j++){
//     console.log(b[j]);
// }
// console.log(b[j]);  // error 


// p5
// const car = { model: 'Hyryder', color: 'red'}
// car.color = 'blue';
// console.log(car);

// p6
// let count = 0;
// function createCounter(){
//     count++;
//     console.log(count);
// }
// createCounter();
// createCounter();
// createCounter();


// function createCounter(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     }
// }
// const counter = createCounter();
// counter();
// counter();
// counter();

//DATA TYPES

//p7
// let arrWithDatatypes = [23,"hello",true,{name: "Priya"},["harry","priya"],function(){}];
// console.log(typeof(arrWithDatatypes[0]));
// console.log(typeof(arrWithDatatypes[1]));
// console.log(typeof(arrWithDatatypes[2]));
// console.log(typeof(arrWithDatatypes[3]));
// console.log(typeof(arrWithDatatypes[4]));
// console.log(typeof(arrWithDatatypes[5]));

//p8

// function restFn(...rest){
//     console.log(Array.isArray({}));
//     console.log(Array.isArray([]));
//     console.log(Array.isArray(rest));
//     return
// }
// restFn([1,2,3,4]);


//p9
// function getValue(a){
//     if(a === ""){
//         console.log(`undefined`)
//     }
//     else if(a === null){
//         console.log("Empty")
//     }
//     else{
//         console.log(a);
//     }
//     return
// }
// getValue(null);
// getValue();
// getValue(20);

// p10
// function validNumber(arg){
//     if(typeof(arg) === Number){
//         return true;
//     }
// }
// console.log(validNumber(30));
// console.log(validNumber(NaN));
// console.log(validNumber(Infinity));

// console.log(typeof(NaN));       //number
// console.log(typeof(undefined)); //undefined
// console.log(typeof(Infinity)); //number

// p11
// let num = NaN;
// if(NaN === num){
//     console.log(true);
// }
// else{
//     console.log('NaN Detected');
// }

// PRIMITIVE VS REFERENCE TYPES

let num = 1;
let newNum = num;
num = 2;

let car = {
    name: 'Fortuner',
    brand: 'Toyota',
    color: 'black'
}
let newObj = car;
car.color = 'white';

console.log(car);       //color: white
console.log(newNum);  // 1
