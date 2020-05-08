// const myAge = 48
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
// console.log(message)

const myAge = 48
const showAge = () => {
    console.log('Showing the page')
}
const showErrorPage = () => {
    console.log('Showing the error page')
}
myAge >= 21 ? showAge() : showErrorPage()

const team = ['One', 'Two']
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people.')
