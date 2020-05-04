const todos = ['task1', 'task2', 'task3', 'task4', 'task5']

todos.splice(2, 1)
todos.push('todo6')
todos.unshift()
console.log(`you have ${todos.length} todos`)
console.log(todos)