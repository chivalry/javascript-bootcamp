const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')
    return todosJSON ? JSON.parse(todosJSON) : []
}

const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const generateTodoDOM = function(todo) {
    const paragraph = document.createElement('p')
    paragraph.textContent = todo.text
    return paragraph
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