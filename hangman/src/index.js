import Hangman from './hangman'
import getPuzzle from './requests'

let game
const puzzle = document.querySelector('#puzzle')
const count = document.querySelector('#count')

window.addEventListener('keypress', function (event) {
    game.guess(event.key)
    render()
})

const render = () => {
    puzzle.innerHTML = ''
    game.puzzle.split('').forEach((letter) => {
        const span = document.createElement('span')
        span.textContent = letter
        puzzle.appendChild(span)
    })
    count.textContent = game.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()