let restaurant = {
    name: 'ASB',
    capacity: 75,
    guests: 0,
    checkAvailability: function (size) {
        let seats = this.capacity - this.guests;
        return size <= seats;
    },
    seatParty: function(size) {
        this.guests += 72;
    },
    removeParty: function(size) {
        this.guests -= size
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
