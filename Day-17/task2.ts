function SortByKey(arr: { [key: string]: number }[], key:string, order: string): { [key: string]: number }[] {
    let newArr: { [key: string]: number }[]= [];
    for(let i=0;i<arr.length;i++){
        const keys = Object.keys(arr[i]);
        for(let keey of keys){
            if(keey === key){
                newArr.push(arr[i]);
            }
        }
    }
    if(order === 'asc'){
        newArr.sort((a,b)=>{
            return (a[key])-(b[key]);
        })
    }
    if(order === "desc"){
        newArr.sort((a,b) =>{
            return (b[key])-(a[key]);
        });
    }

return newArr;
}
console.log(SortByKey([{ age: 30 }, { age: 20 }], 'age', 'desc'));
console.log(SortByKey([{ age: 30 }, { age: 20 }], 'age', 'asc'));  

