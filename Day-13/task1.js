function CounterFunction(n){
    let count = n;
    console.log(n);
    return function(){
        count++;
        console.log(count);
    }
}
const counter = CounterFunction(9);
counter();
counter();
counter();
counter();