// here it uses recursion
// recursion remembers the path automatically because it builds a new updated path every time it goes deeper.

// Pattern Rule
// Look -> Compare -> Decide -> Go Deeper(if needed) -> Return result


function findPath(obj, targetKey, path=[]){
    for(let key in obj){
        const newPath = [...path,key];
        if(key === targetKey) return newPath;
        if(typeof obj[key] === "object" && obj[key] !== null){
            const result = findPath(obj[key], targetKey,newPath);
            if(result) return result;
            // result stores the answer returned from a deeper recursive search. 
        }
    }
    // nothing found 
    return null;
}
console.log(findPath({a:{b:{c:1}}}, "c"));
console.log(findPath({ x: { y: { z: { b: 10 }}}},"z"));

