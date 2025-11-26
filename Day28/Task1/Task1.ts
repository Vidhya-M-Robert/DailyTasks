 export function celsiustoFahrenheit(celsius: number){
    if(typeof(celsius) !== "number"){
        return  "Invalid;"
    }
    let Fahren = celsius;
    let output = (9/5) *Fahren + 32;
    return output
}
celsiustoFahrenheit(37.7778);