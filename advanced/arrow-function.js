const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Charles',
    age: 48
}, {
    name: 'Melanie',
    age: 47
}, {
    name: 'Kieran',
    age: 18
}, {
    name: 'Tiana',
    age: 16
}]

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

me = people.find(person => person.age === 48)
console.log(me.name)