const game = new Hangman('cat', 2)
const puzzle = document.querySelector('#puzzle')
const count = document.querySelector('#count')
puzzle.textContent = game.getPuzzle()
count.textContent = game.count
window.addEventListener('keypress', function (event) {
    game.guess(event.key)
    puzzle.textContent = game.getPuzzle()
    count.textContent = game.count
})