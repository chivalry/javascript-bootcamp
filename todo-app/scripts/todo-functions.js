'use strict'

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        return []
    }
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
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')

    const removeButton = document.createElement('button')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    removeButton.textContent = 'Remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

const generateSummaryDOM = (todos) => {
    const count = todos.filter((todo) => !todo.completed ).length
    const noun = count === 1 ? 'todo' : 'todos'
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    summary.textContent = `You have ${count} ${noun} left`
    return summary
}

const renderTodos = (todos, filters) => {
    const todoDiv = document.querySelector('#todos')
    todoDiv.innerHTML = ''
    const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchString.toLowerCase()))
    todoDiv.appendChild(generateSummaryDOM(filteredTodos))
    if (filteredTodos.length === 0) {
        const paragraph = document.createElement('p')
        paragraph.classList.add('empty-message')
        paragraph.textContent = 'No to-dos to show'
        todoDiv.appendChild(paragraph)
    } else {
        filteredTodos.forEach((todo) => {
            if (!todo.completed || !filters.hideCompleted) {
                todoDiv.appendChild(generateTodoDOM(todo))
            }
        })
    }
}