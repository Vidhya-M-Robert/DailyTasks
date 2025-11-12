function findPowerSum(num) {
    var sum = 0n;
    for (var i = 1n; i <= BigInt(num); i++) {
        var power = Math.pow(i, i);
        sum += power;
    }
    var stringValue = sum.toString();
    var lastTen = stringValue.slice(-10);
    return lastTen;
}
console.log(findPowerSum(15));
console.log(findPowerSum(1000));
