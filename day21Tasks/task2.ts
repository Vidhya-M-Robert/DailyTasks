export function SeatingArrangementsWithRoundTable(people :string | string[]): string[] | string{
    if(people.length === 0 || typeof(people) !== "string"){
        return "Invalid"
    }
    let result: string[] = [];
    let peopleReplace = people.replaceAll(",","");
    let length: number = peopleReplace.length;
        for(let i=0;i<length;i++){
            for(let j=i;j<length;j++){
                result.push(peopleReplace[j]);
            }
            for(let k = 0; k<i;k++){
                result.push(peopleReplace[k]);
            }
        }
    return result;
}
console.log(SeatingArrangementsWithRoundTable("A,B,C"));

