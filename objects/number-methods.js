let guess = function(num) {
    rand = Math.floor(Math.random() * 5) + 1;
    console.log(rand);
    return rand == num;
}

console.log(guess(1))
console.log(guess(1))
console.log(guess(3))
console.log(guess(3))