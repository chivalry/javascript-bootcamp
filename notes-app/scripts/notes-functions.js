'use strict'

const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (error) {
        return []
    }
}

const removeNote = (id) => {
    const index = notes.findIndex((note) => note.id === id )
    if (index > -1) {
        notes.splice(index, 1)
    }
}

const generateNoteDOM = (note) => {
    const noteElement = document.createElement('a')
    const linkElement = document.createElement('p')
    const status = document.createElement('p')
    linkElement.textContent = note.title.length > 0 ? note.title : 'Unnamed note'
    linkElement.classList.add('list-item__title')
    noteElement.appendChild(linkElement)
    noteElement.setAttribute('href', `edit.html#${note.id}`)
    noteElement.classList.add('list-item')
    status.textContent = generateLastEdited(note.updatedAt)
    status.classList.add('list-item__subtitle')
    noteElement.appendChild(status)
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
    const notesEl = document.querySelector('#notes')
    notesEl.innerHTML = ''
    if (filteredNotes.length > 0 ) {
        filteredNotes.forEach((note) => {
            const noteElement = generateNoteDOM(note)
            notesEl.appendChild(noteElement)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }

}

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`