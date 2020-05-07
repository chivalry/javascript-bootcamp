const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

const removeNote = function(id) {
    const index = notes.findIndex(function(note) {
        return note.id === id
    })
    if (index > -1) {
        notes.splice(index, 1)
    }
}

const generateNoteDOM = function(note) {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('span')
    const button = document.createElement('button')
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', function(event) {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    textElement.textContent = note.title.length > 0 ? note.title : 'Unnamed note'
    noteElement.appendChild(textElement)
    return noteElement
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach(function(note) {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}

const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}