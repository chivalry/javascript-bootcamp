const game = new Hangman('car parts', 2)
const puzzle = document.querySelector('#puzzle')
const count = document.querySelector('#count')
puzzle.textContent = game.puzzle
count.textContent = game.statusMessage
window.addEventListener('keypress', function (event) {
    game.guess(event.key)
    puzzle.textContent = game.puzzle
    count.textContent = game.statusMessage
})


getPuzzle(2).then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
})

getCountry('MX').then((country) => {
    console.log(country.name)
}, (err) => {
    console.log(err)
})