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

const filters = {
    searchString: ''
}

const renderTodos = function(todos, filters) {
    const todoDiv = document.querySelector('#todos')
    todoDiv.innerHTML = ''
    const filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchString.toLowerCase())
    })
    const count = filteredTodos.filter(function(todo) {
        return !todo.completed
    }).length
    const summary = document.createElement('h2')
    summary.textContent = `You have ${count} todos left`
    todoDiv.appendChild(summary)
    filteredTodos.forEach(function(todo) {
        const paragraph = document.createElement('p')
        paragraph.textContent = todo.text
        document.querySelector('#todos').appendChild(paragraph)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(event) {
    filters.searchString = event.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo-form').addEventListener('submit', function(event) {
    event.preventDefault()
    todos.push({
        text: event.target.elements.todo.value,
        completed: false
    })
    renderTodos(todos, filters)
    event.target.elements.todo.value = ''
})