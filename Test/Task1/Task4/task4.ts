function templateParser(str: string, obj: {key: string | number , value: string | number}){
    let keys = Object.keys(obj);
    let values = Object.values(obj);
        let replace = str.replaceAll("{","");
        let replace2 = replace.replaceAll("}","");
        let split = replace2.split(" ");
        console.log(split);
    for(let i=0;i<split.length;i++){
        for(let key of keys){
            for(let value of values){
                 if(split[i] === key){
                    split[i] = value[key];
                }
            }
        }
    }
    return split;
}
console.log(templateParser("Hello {{name}}, you have {{count}} new messages.", { name: "John", count: 3 }));