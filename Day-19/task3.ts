export function SortByScoreRank(data: number[]){
    if(!Array.isArray(data)){
        return "Invalid"
    }
    let sortedScore: number[] = data.sort((a: number,b: number)=> b-a)
    console.log(sortedScore);
    let rank: number|string = 0;
    let newArr = [];
    for(let i=0;i<sortedScore.length;i++){
        rank++;
     newArr.push({score:sortedScore[i],rank:rank})
    }
    for(let i=0;i<sortedScore.length;i++){
        for(let j=i+1;j<sortedScore.length;j++){
            if(sortedScore[i] === sortedScore[j]){
                newArr[j].rank = newArr[i].rank;
            }
            else{
                newArr[j].rank = newArr[i].rank+1;
            }
        }
    }
    return newArr
}
console.log(SortByScoreRank([90,2,45]))