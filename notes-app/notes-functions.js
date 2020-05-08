const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    return notesJSON ? JSON.parse(notesJSON) : []
}

const removeNote = (id) => {
    const index = notes.findIndex((note) => note.id === id )
    if (index > -1) {
        notes.splice(index, 1)
    }
}

const generateNoteDOM = (note) => {
    const noteElement = document.createElement('div')
    const linkElement = document.createElement('a')
    const button = document.createElement('button')
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', (event) => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    linkElement.textContent = note.title.length > 0 ? note.title : 'Unnamed note'
    linkElement.setAttribute('href', `/edit.html#${note.id}`)
    noteElement.appendChild(linkElement)
    return noteElement
}

const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt > b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach((note) => {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`