function checkObjectEquality(obj1, obj2){
    const Keys1 = Object.keys(obj1).toString();
    const Keys2 = Object.keys(obj2).toString();
    const Values1 = Object.values(obj1).toString();
    const Values2 = Object.values(obj2).toString();
    if(Keys1 === Keys2 && Values1 === Values2){
        
    }
    else{
        console.log("Not Equal");
    }
}
checkObjectEquality({ a: 1, b: 2 }, { b: 3, c: 4 });