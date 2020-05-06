const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const incomplete = todos.filter(function(todo) {
    return !todo.completed
})
const summary = document.createElement('h2')
summary.textContent = `You have ${incomplete.length} todos left`
const body = document.querySelector('body')
body.appendChild(summary)
todos.forEach(function(todo) {
    const paragraph = document.createElement('p')
    paragraph.textContent = todo.text
    body.appendChild(paragraph)
})
document.querySelector('#add-todo').addEventListener('click', function(event) {
    console.log('clicked')
})