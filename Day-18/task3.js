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
function Pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (x) {
        var result = x;
        for (var i = 0; i < fns.length; i++) {
            result = fns[i](result);
        }
        return result;
    };
}
console.log(Pipe(function (x) { return x + 5; }, function (x) { return x * 3; })(5)); // 30
