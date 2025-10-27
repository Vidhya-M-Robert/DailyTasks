function combineObject(obj1, obj2){
    const merged = {...obj1,...obj2}
    console.log(merged);
}
combineObject({ a: 1, b: 2 }, { b: 3, c: 4 });