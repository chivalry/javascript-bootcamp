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

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })

console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function(note, index) {
    console.log(note)
    return note.title === 'Habbits to work on'
})
console.log(index)