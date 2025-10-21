function invertKeyValues(obj){
    let newObj = {};
    const keyOnly = Object.keys(obj);
    console.log(keyOnly);
    const valuesOnly = Object.values(obj);
    console.log(valuesOnly);
};
invertKeyValues({ a: 1, b: 2 });