const todos = ['task1', 'task2', 'task3', 'task4', 'task5']

todos.splice(2, 1)
todos.push('todo6')
todos.shift()
console.log(`you have ${todos.length} todos`)
todos.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`)
})
for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${todos[i]}`)
}