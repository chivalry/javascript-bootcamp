const calculateAverage = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    const avg =  sum / numbers.length
    return `The average ${thing} is ${avg}`
}

console.log(calculateAverage('grade', 0, 100, 88, 64))