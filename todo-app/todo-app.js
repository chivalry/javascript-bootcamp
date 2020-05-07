const todos = getSavedTodos()

const filters = {
    searchString: '',
    hideCompleted: false
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
    saveTodos(todos)
    renderTodos(todos, filters)
    event.target.elements.todo.value = ''
})

document.querySelector('#hide-completed-checkbox').addEventListener('change', function(event) {
    filters.hideCompleted = event.target.checked
    renderTodos(todos, filters)
})