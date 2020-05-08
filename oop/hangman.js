const Hangman = function (word, count) {
    this.word = word
    this.count = count
}
let game = new Hangman('cat', 5)
console.log(game)
game = new Hangman('blah', 8)
console.log(game)