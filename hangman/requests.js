const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

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