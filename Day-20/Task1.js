// NOT COMPLETE
function TeamSelection(players, teamSize) {
    // let compareElement: number[] = teamSize - 1;
    var newArr = [];
    var removeDup = "";
    for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
        var player = players_1[_i];
        if (!removeDup.includes(player)) {
            removeDup = removeDup + player;
        }
    }
    // console.log(removeDup)
    for (var i = 0; i < removeDup.length; i++) {
        for (var j = i + 1; j < removeDup.length; j++) {
            // for(let k=j+1;k<removeDup.length;k++){
            //newArr.push([removeDup[i],removeDup[j],removeDup[k]]);
            newArr.push([removeDup[i], removeDup[j]]);
            // } 
        }
    }
    return newArr;
}
console.log(TeamSelection(["a", "b", "c", "d", "e", "a", "c"], 2));
// console.log(TeamSelection(["a","b","c","d","e","a","c"],3));
