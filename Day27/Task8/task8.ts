export function ObjtoQuery(obj: {key: string ,value: string | number}): string{
   if(Object.keys(obj).length === 0){
    return "Invalid"
   }
   let keys = Object.keys(obj);
   let values = Object.values(obj);
   let result = "";
   for(let i=0;i<keys.length;i++){
      result += `${keys[i]} = ${values[i]}&`
   }
   const sliced = result.slice(0,-1);
   return sliced
}
// console.log(ObjtoQuery({name:"John"}));