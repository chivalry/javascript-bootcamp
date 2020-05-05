const todos = [{
    text: 'task1',
    completed: false
}, {
    text: 'task2',
    completed: true
}, {
    text: 'task3',
    completed: false
}]

const deleteTodo = function(todos, task) {
    index = todos.findIndex(function(item, index) {
        return task.toLowerCase() === item.text.toLowerCase()
    })
    if (index >= 0) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function(todos) {
    return todos.filter(function(item, index) {
        return !item.completed
    })
}

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)


// console.log(getThingsToDo(todos))