function filterProducts(products: {name:string,price: number}, SearchText: string){
    let SearchTextLower = SearchText.toLowerCase();
    let caseSe;
    let newArr: string[] = [];
    for(let i=0;i<products.length;i++){
        let kyed = Object.keys(products[i]);
        // console.log(kyed);
        for(let key of kyed){
            if(key === "name"){
                let keys = Object.values(products[i]);
                // console.log(keys);
                let lower = keys.map(String);
                // console.log(lower)
                caseSe = String(lower).toLowerCase();
                newArr.push(caseSe);
            }
            if(newArr.includes(SearchTextLower)){
                console.log("It includes");
            }
        }
}
}
console.log(filterProducts([{ name: "Laptop", price: 60000 },{ name: "Mouse", price: 800 },{ name: "Monitor", price: 12000 }],"lap"));