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

document.querySelector('#create-note').addEventListener('click', function(event) {
    event.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function(event) {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})