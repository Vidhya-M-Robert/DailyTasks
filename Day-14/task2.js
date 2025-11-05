function formatText(arr, num){
    let arr2 = [];
    let newarr =[];
    for(let i=0;i<arr.length;i++){
        newarr.push(arr[i]);
        const stringed = String(newarr)
        let replace = stringed.replaceAll(","," ");
        console.log(replace);
    }
    result = []
    for(let i=0; i<replace.length;i++){
        console.log(replace);
            let neww = replace.substring(0,num);
            result.push(neww);
        }
        return result;
}
formatText(["This", "is", "an", "example", "of", "text", "justification."], 16);

