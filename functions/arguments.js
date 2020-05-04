let getTip = function(total, percent=0.2) {
    return `A ${percent * 100}% tip on $${total} would be $${total * percent}.`
    return total * percent;
}

console.log(getTip(10))
console.log(getTip(10, .15))