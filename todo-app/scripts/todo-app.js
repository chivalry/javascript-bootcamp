'use strict'

const todos = getSavedTodos()

const filters = {
    searchString: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (event) => {
    filters.searchString = event.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo-form').addEventListener('submit', (event) => {
    event.preventDefault()
    const text = event.target.elements.todo.value.trim()
    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text: text,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
    }
    event.target.elements.todo.value = ''
})

document.querySelector('#hide-completed-checkbox').addEventListener('change', (event) => {
    filters.hideCompleted = event.target.checked
    renderTodos(todos, filters)
})