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

console.log(todos)
deleteTodo(todos, 'task2')
console.log(todos)
deleteTodo(todos, 'not there')
console.log(todos)