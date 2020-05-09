class Person {
    constructor(firstName, lastName, age, likes=[]) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(lastName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        return `${this.firstName} is ` + (this.grade >= 70 ? 'passing' : 'failing') + ' the class'
    }

    updateGrade(diff) {
        this.grade += diff
    }
}

const me = new Employee('Chuck', 'Ross', 48, 'programmer')
me.fullName = 'Charles Ross'
console.log(me.getBio())
console.log(me.getBio())