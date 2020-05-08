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
Hangman.prototype.guess = function (letter) {
    letter = letter.toLowerCase()
    if (this.letters.includes(letter)) {
        return
    }
    this.letters.push(letter)
    if (!this.word.includes(letter)) {
        this.count--
    }
}
let game = new Hangman('cat', 2)
console.log(game.getPuzzle())
console.log(game.count)
window.addEventListener('keypress', function (event) {
    game.guess(event.key)
    console.log(game.getPuzzle())
    console.log(game.count)
})