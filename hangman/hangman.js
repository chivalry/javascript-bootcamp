const Hangman = function (word, count) {
    this.word = word.toLowerCase().split('')
    this.count = count
    this.letters = []
    this.status = 'playing'
    this.getStatus()
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
    this.getStatus()
}

Hangman.prototype.getStatus = function () {
    if (this.count === 0) {
        this.status = 'failed'
    } else {
        const finished = this.word.every((letter) => this.letters.includes(letter))
        this.status = finished ? 'finished' : this.status
    }
    console.log(this.status)
}