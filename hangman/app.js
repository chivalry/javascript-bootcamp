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

const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 4) {
        const data = JSON.parse(event.target.responseText)
        console.log(data)
    }
})
request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()