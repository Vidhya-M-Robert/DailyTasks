function findPowerSum(num){
    let sum =0n;
    for(let i = 1n; i<=BigInt(num); i++){
        let power = i ** i;
        sum +=power;
    }
    const string = sum.toString();
    const sliced = string.slice(-10);

    return sliced;
}
console.log(findPowerSum(15));
console.log(findPowerSum(1000));