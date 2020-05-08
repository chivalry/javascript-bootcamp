const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}
const me = new Person('Chuck', 'Ross', 48)
console.log(me)
const person = new Person('Mellie', 'Ross', 57)
console.log(person)