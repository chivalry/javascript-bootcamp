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

// const p = document.querySelector('p')
// p.remove()

const ps = document.querySelectorAll('p')
ps.forEach(function(p) {
    p.textContent = '***'
    // console.log(p.textContent)
    // p.remove()
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)