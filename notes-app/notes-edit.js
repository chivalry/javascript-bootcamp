const noteID = location.hash.substr(1)
let notes = getSavedNotes()
let note = notes.find(function(note) {
    return note.id === noteID
})
if (note === undefined) {
    location.assign('/index.html')
}

editedSpan = document.querySelector('#last-edited')
editedSpan.textContent = generateLastEdited(note.updatedAt)

titleField = document.querySelector('#note-title')
titleField.value = note.title
titleField.addEventListener('input', function(event) {
    note.title = titleField.value
    note.updatedAt = moment().valueOf()
    editedSpan.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyField = document.querySelector('#note-body')
bodyField.value = note.body
bodyField.addEventListener('input', function(event) {
    note.body = bodyField.value
    note.updatedAt = moment().valueOf()
    editedSpan.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeButton = document.querySelector('#remove-note')
removeButton.addEventListener('click', function(event) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function(event) {
    if (event.key === 'notes') {
        notes = JSON.parse(event.newValue)
        note = notes.find(function(note) {
            return note.id === noteID
        })
        if (note === undefined) {
            location.assign('/index.html')
        }
        titleField.value = note.title
        bodyField.value = note.body
        editedSpan.textContent = generateLastEdited(note.updatedAt)
    }
})