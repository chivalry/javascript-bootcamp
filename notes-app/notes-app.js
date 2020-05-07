const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise'
}, {
    title: 'Office modifications',
    body: 'Get new chair'
}]

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach(function(note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(event) {
    event.target.textContent = 'The button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function(event) {
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

document.querySelector('#name-form').addEventListener('submit', function(event) {
    event.preventDefault()
    console.log(event.target.elements.firstName.value)
    event.target.elements.firstName.value = ''
})