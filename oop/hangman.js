const Hangman = function (word, count) {
    this.word = word.toLowerCase().split('')
    this.count = count
    this.letters = []
}
Hangman.prototype.getPuzzle = function () {
    let buf = ''
    this.word.forEach((letter) => buf += letter === ' ' ? ' ' : this.letters.includes(letter) ? letter : '*')
    return buf
}
let game = new Hangman('cat', 5)
console.log(game.getPuzzle())
game = new Hangman('blah blah', 8)
console.log(game.getPuzzle())