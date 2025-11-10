function ComposeAsync(...fns){    
    return function(x){   
        let result = x;
        for(let i=fns.length-1;i>=0;i--){
            result = fns[i](result);
        }
        return result;
    };
}
console.log(ComposeAsync( x => x+1, x => x*2)(3));