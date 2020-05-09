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


getPuzzle(2, (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

const country = getCountry('MX', (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(country.name)
    }
})