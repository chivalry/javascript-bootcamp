const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (event) => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText)
            resolve(data.puzzle)
        } else if (event.target.readyState === 4) {
            reject('An error has occurred')
        }
    })
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})

const getCountry = (code) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (event) => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            const countries = JSON.parse(event.target.responseText)
            const country = countries.find((country) => country.alpha2Code === code)
            resolve(country)
        } else if (event.target.readyState === 4) {
            reject('An error has occurred')
        }
    })
    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
})