function DeepEqual(a,b){
    if (typeof a !== typeof b) {
        return false;
    }
    if(a.length !== b.length){
        return false
    }
    if(Array.isArray(a,b)){
        for(let i=0;i<a.length;i++){
            for(let j=0;j<b.length;j++){
                if(a[i]===b[j]){
                    return true
                }
                else{
                    return false
                }
            }
        }
    }
    if(typeof(a) === "object" && typeof(b) === "object"){
        const key1 = Object.keys(a);
        const keys2 = Object.keys(b);
        if(key1.length !== keys2.length){
            return false
        }
        else{
        for(let key of key1){  
        if (!DeepEqual(a[key], b[key])) {
            return false;
        }
        else{
            return true
        }
        }
        }
    }
    if(a === b){
        return true
    }
   else{
    return false
   }


}
console.log(DeepEqual({x:1,y:{z:2}}, {x:1,y:{z:3}}))
console.log(DeepEqual([1, 2, 3], [1, 2, 3]));
console.log(DeepEqual(1, "1"))