let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(event) {
    id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(event) {
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(event) {
    console.log(event.target.value)
})

window.addEventListener('storage', function(event) {
    if (event.key === 'notes') {
        notes = getSavedNotes()
        renderNotes(notes, filters)
    }
})

const birthday = moment()
birthday.month('June')
birthday.date(16)
birthday.year(1971)
console.log(birthday.format('MMM D, YYYY'))