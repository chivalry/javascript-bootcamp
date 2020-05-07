const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')
    return todosJSON ? JSON.parse(todosJSON) : []
}

const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = function(id) {
    const index = todos.findIndex(function(todo) {
        return todo.id === id
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const toggleTodo = function(id) {
    const todo = todos.find(function(todo) {
        return todo.id === id
    })
    if (todo) {
        todo.completed = !todo.completed
    }
}

const generateTodoDOM = function(todo) {
    const todoElement = document.createElement('div')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', function(event) {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    todoElement.appendChild(checkbox)
    const paragraph = document.createElement('span')
    paragraph.textContent = todo.text
    todoElement.appendChild(paragraph)
    const button = document.createElement('button')
    button.textContent = 'x'
    todoElement.appendChild(button)
    button.addEventListener('click', function(event) {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
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
        if (!todo.completed || !filters.hideCompleted) {
            todoDiv.appendChild(generateTodoDOM(todo))
        }
    })
}