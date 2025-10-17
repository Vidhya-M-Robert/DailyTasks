function DuplicatesfromString(strs){
    let removedDuplicates = "";
    for(let str of strs){
        if(!removedDuplicates.includes(str)){
            removedDuplicates = removedDuplicates + str
        }
    }
    return removedDuplicates;
}
console.log(DuplicatesfromString('apple'));