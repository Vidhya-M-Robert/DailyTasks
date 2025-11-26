"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.celsiustoFahrenheit = celsiustoFahrenheit;
function celsiustoFahrenheit(celsius) {
    if (typeof (celsius) !== "number") {
        return "Invalid;";
    }
    var Fahren = celsius;
    var output = (9 / 5) * Fahren + 32;
    return output;
}
celsiustoFahrenheit(37.7778);
