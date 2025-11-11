function Pipe(...fns: ){
  return function(x){   
        let result = x;
        for(let i=0;i<fns.length;i++){
            result = fns[i](result);
        }
        return result;
    };
}
console.log(Pipe((x:number) => x + 5, (x:number) => x * 3)(5));