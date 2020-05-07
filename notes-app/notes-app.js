const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(event) {
    notes.push({
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(event) {
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(event) {
    console.log(event.target.value)
})