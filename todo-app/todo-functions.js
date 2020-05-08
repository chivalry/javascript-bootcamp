const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    return todosJSON ? JSON.parse(todosJSON) : []
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = (id) => {
    const index = todos.findIndex((todo) => {
        return todo.id === id
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
    }
}

const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('div')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', (event) => {
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
    button.addEventListener('click', (event) => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoElement
}

const generateSummaryDOM = (todos) => {
    const count = todos.filter((todo) => !todo.completed ).length
    const summary = document.createElement('h2')
    summary.textContent = `You have ${count} todos left`
    return summary
}

const renderTodos = (todos, filters) => {
    const todoDiv = document.querySelector('#todos')
    todoDiv.innerHTML = ''
    const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchString.toLowerCase()))
    todoDiv.appendChild(generateSummaryDOM(filteredTodos))
    filteredTodos.forEach((todo) => {
        if (!todo.completed || !filters.hideCompleted) {
            todoDiv.appendChild(generateTodoDOM(todo))
        }
    })
}