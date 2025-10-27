function deepClone(obj){
    const string = JSON.stringify(obj);
    const parses = JSON.parse(string);
    return parses;
}
console.log(deepClone({name: 'Harry', hobbies: ['reading', 'swimming','cycling'], gender: 'male'}));

