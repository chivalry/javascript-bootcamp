const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const getCountry = async (code) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const countries = await response.json()
        return countries.find((country) => country.alpha2Code === code)
    } else {
        throw new Error('Unable to fetch countries')
    }
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=02d1730f810de2')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}