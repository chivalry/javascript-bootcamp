'use strict'

const noteID = location.hash.substr(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteID)
if (!note) {
    location.assign('/index.html')
}

const editedSpan = document.querySelector('#last-edited')
editedSpan.textContent = generateLastEdited(note.updatedAt)

const titleField = document.querySelector('#note-title')
titleField.value = note.title
titleField.addEventListener('input', (event) => {
    note.title = titleField.value
    note.updatedAt = moment().valueOf()
    editedSpan.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

const bodyField = document.querySelector('#note-body')
bodyField.value = note.body
bodyField.addEventListener('input', (event) => {
    note.body = bodyField.value
    note.updatedAt = moment().valueOf()
    editedSpan.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

const removeButton = document.querySelector('#remove-note')
removeButton.addEventListener('click', (event) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (event) => {
    if (event.key === 'notes') {
        notes = JSON.parse(event.newValue)
        note = notes.find((note) => note.id === noteID)
        if (!note) {
            location.assign('/index.html')
        }
        titleField.value = note.title
        bodyField.value = note.body
        editedSpan.textContent = generateLastEdited(note.updatedAt)
    }
})