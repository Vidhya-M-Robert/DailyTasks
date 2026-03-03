// right to left
function compose(functions){    //function that takes an array of functions as arguments
    return function(x) {        // return another function that takes only one argument(X).
        let result = x;
        for(let i=functions.length-1;i>=0;i--){
            result = functions[i](result);
        }
        return result;
    };
}

console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4)); 
console.log(compose([])(4));

// left to right

function pipe(functions){
    return function(x){
        let result = x;
        for(let i=0; i < functions.length; i++){
            result = functions[i](result);
        }
        return result;
    };
}
console.log(pipe([x => x + 1, x => x * x, x => 2 * x])(4));