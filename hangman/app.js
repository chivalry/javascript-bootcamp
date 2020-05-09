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


getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})
console.log('do something else')
const puzz = getPuzzleSync()
console.log(puzz)

// const usReq = new XMLHttpRequest()
// usReq.addEventListener('readystatechange', (event) => {
//     if (event.target.readyState === 4 && event.target.status === 200) {
//         const countries = JSON.parse(event.target.responseText)
//         const country = countries.find((country) => country.alpha2Code === 'US')
//         console.log(country.name)
//     }
// })
// usReq.open('GET', 'http://restcountries.eu/rest/v2/all')
// usReq.send()