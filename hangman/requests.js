const getPuzzle = (callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (event) => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText)
            callback(undefined, data.puzzle)
        } else if (event.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
}