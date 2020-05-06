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

document.querySelector('button').addEventListener('click', function(event) {
    event.target.textContent = 'Clicked'
})