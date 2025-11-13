// NOT COMPLETE

function TeamSelection(players: string[], teamSize: number): string[][] | string{
    // let compareElement: number[] = teamSize - 1;
    let newArr = [];
     let removeDup = "";
    for(let player of players){
        if(!removeDup.includes(player)){
            removeDup = removeDup + player
        }
    }
    // console.log(removeDup)
    for(let i=0;i<removeDup.length;i++){
       for(let j=i+1;j<removeDup.length;j++){
            // for(let k=j+1;k<removeDup.length;k++){
            //newArr.push([removeDup[i],removeDup[j],removeDup[k]]);
            newArr.push([removeDup[i],removeDup[j]]);
            // } 
       }
    }
    return newArr
}
console.log(TeamSelection(["a","b","c","d","e","a","c"],2));
// console.log(TeamSelection(["a","b","c","d","e","a","c"],3));