function deepClone(obj){
    const deepCloned = JSON.stringify(obj);
    const parsed = JSON.parse(deepCloned)
    return parsed;
}
console.log(deepClone({name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}))
