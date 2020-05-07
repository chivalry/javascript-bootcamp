let todos = []

const filters = {
    searchString: '',
    hideCompleted: false
}

const todosJSON = localStorage.getItem('todos')
if (todosJSON) {
    todos = JSON.parse(todosJSON)
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
        if (todo.completed || !filters.hideCompleted) {
            const paragraph = document.createElement('p')
            paragraph.textContent = todo.text
            todoDiv.appendChild(paragraph)
        }
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
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    event.target.elements.todo.value = ''
})

document.querySelector('#hide-completed-checkbox').addEventListener('change', function(event) {
    filters.hideCompleted = event.target.checked
    renderTodos(todos, filters)
})