const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')
    return todosJSON ? JSON.parse(todosJSON) : []
}

const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const generateTodoDOM = function(todo) {
    const todoElement = document.createElement('div')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    todoElement.appendChild(checkbox)
    const paragraph = document.createElement('span')
    paragraph.textContent = todo.text
    todoElement.appendChild(paragraph)
    const button = document.createElement('button')
    button.textContent = 'x'
    todoElement.appendChild(button)
    return todoElement
}

const generateSummaryDOM = function(todos) {
    const count = todos.filter(function(todo) {
        return !todo.completed
    }).length
    const summary = document.createElement('h2')
    summary.textContent = `You have ${count} todos left`
    return summary
}

const renderTodos = function(todos, filters) {
    const todoDiv = document.querySelector('#todos')
    todoDiv.innerHTML = ''
    const filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchString.toLowerCase())
    })
    todoDiv.appendChild(generateSummaryDOM(filteredTodos))
    filteredTodos.forEach(function(todo) {
        if (todo.completed || !filters.hideCompleted) {
            todoDiv.appendChild(generateTodoDOM(todo))
        }
    })
}