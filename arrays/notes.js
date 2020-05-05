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

const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}


const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, 'work'))

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'soffice modifications')
console.log(note)