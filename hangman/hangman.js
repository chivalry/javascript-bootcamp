class Hangman {
    constructor(word, count) {
        this.word = word.toLowerCase().split('')
        this.count = count
        this.letters = []
        this.status = 'playing'
        this.updateStatus()
    }

    getPuzzle() {
        let buf = ''
        this.word.forEach((letter) => buf += letter === ' ' ? ' ' : this.letters.includes(letter) ? letter : '*')
        return buf
    }

    guess(letter) {
        if (this.status !== 'playing') {
            return
        }
        letter = letter.toLowerCase()
        if (this.letters.includes(letter)) {
            return
        }
        this.letters.push(letter)
        if (!this.word.includes(letter)) {
            this.count--
        }
        this.updateStatus()
    }

    updateStatus() {
        if (this.count === 0) {
            this.status = 'failed'
        } else {
            const finished = this.word.every((letter) => this.letters.includes(letter))
            this.status = finished ? 'finished' : this.status
        }
    }

    statusMessage() {
        if (this.status == 'playing') {
            return `Guesses left: ${this.count}`
        } else if (this.status == 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
}