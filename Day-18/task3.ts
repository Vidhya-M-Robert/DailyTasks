// function Pipe(...fns: ((x: number[])=> number)[]){// number []
//   return function(x: number){   
//         let result = x;
//         for(let i=0;i<fns.length;i++){
//             result = fns[i](result);
//         }
//         return result;
//     };
// }
// console.log(Pipe((x:number) => x + 5, (x:number) => x * 3)(5));

function Pipe(...fns: ((x: number) => number)[]) {
  return function (x: number) {             //returns another function that takes one argument=x(a number)
    let result = x;      //The inner function receives the number x(starting input) and it saves it into a variable result,which will keep changing as each function is applied.  //here result = 5
    for (let i = 0; i < fns.length; i++) {    //fns = [(x) => x + 5,(x) => x * 3]
      result = fns[i](result);    //it applies each function to the current result.
    }
    return result;
  };
}
console.log(Pipe((x: number) => x + 5, (x: number) => x * 3)(5)); // 30


// It takes the function at index i
// Passes the current result as input
// Stores the returned value back in result
