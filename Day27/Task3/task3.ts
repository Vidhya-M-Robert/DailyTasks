export function ifArmstrong(num: number): boolean | string{
     if(!Number.isInteger(num) || num < 0)
    {
        return "Invalid Entry"
    }
    let count: number = 0;
    let newArr: number[] = [];
    let original: number = num;
    const stringg: string = num.toString();
    for(let i =0; i<stringg.length; i++){
        count++;
    }
    for(let j = 0; j<stringg.length; j++){
        const cubes = stringg[j]**count;
        newArr.push(cubes);
    }
    let sum = newArr.reduce((acc,cur)=> acc+ cur,0);
    return sum === original ;
}
console.log(ifArmstrong(388));