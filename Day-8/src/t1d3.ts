function sumArray(arr: number[][]): number{
    const splitted1 = String(arr.slice(0,1));
    const splitted2 = String(arr.slice(1));
    const replaced1 =Number(splitted1.replaceAll(",",""));
    const replaced2 =Number(splitted2.replaceAll(",",""));
    return replaced1 + replaced2;
}
console.log(sumArray([[1,2,3], [0, 7]]));