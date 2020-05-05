<template lang="html">
<div class="ListItem" v-bind:class="{checked_in: booking.checked_in}">
  <p>Customer Name: {{booking.name}}</p>
  <p>Customer Email: {{booking.email}}</p>
<button v-if="!booking.checked_in" v-on:click="updateCheckIn(booking)" type="button" name="button">Check-In</button>
<button v-on:click="handleDelete" type="button" name="">Delete Booking</button>
</div>
</template>
<script>
import {eventBus} from '@/main.js'
import BookingService from '@/services/BookingService.js'
export default {
  name: 'list-item',
  props: ['booking'],
methods: {
  handleDelete() {
  BookingService.deleteBooking(this.booking._id)
  .then(() => eventBus.$emit('delete-booking', this.booking._id))
},
  updateCheckIn(booking) {
    const updatedBooking = {
      checked_in: true
    }
    BookingService.updateBooking(booking._id, updatedBooking)
    .then(booking => eventBus.$emit('booking-updated', booking)
    )
  }
  }
}
</script>
<style lang="css" scoped>
.ListItem {
  padding: 5px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  margin: 5px;
  width: 55vw;
  height: 30vh;
}

.checked_in {
  background-color: rgba(125, 135, 86, 0.5);
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px;
}

button {
  width: 150px;
  align-self: center;
}
</style>
