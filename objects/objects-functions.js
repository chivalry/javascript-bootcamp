let conversion = function (fahr) {
    return {
        fahrenheit: fahr,
        celcius: (fahr - 32) * 5 / 9,
        kelvin: (fahr - 32) * 5 / 9 + 273.15
    }
}

console.log(conversion(32))
console.log(conversion(100))