type NestedObject = {[key: string]: NestedObject | string | number | boolean | null};
function findPath(obj: NestedObject, targetKey: string, path: string[] = []): string[] | null{
    for(const key in obj){
        const newPath = [...path,key];
        if(key === targetKey){
            return newPath
        }
        const value = obj[key];
        if(typeof value === "object" && value !== null){
            const result = findPath(value,targetKey,newPath);
            if(result) return result;
        } 
    }
    return null;
}
console.log(findPath({a:{b:{c:1}}}, "c"));