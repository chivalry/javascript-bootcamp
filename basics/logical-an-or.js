let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('only vegan')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('some vegan')
} else {
    console.log('no vegan')
}