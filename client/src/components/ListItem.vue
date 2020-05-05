<template lang="html">
<div class="ListItem">
  <p> Customer Name: {{booking.name}} Customer Email: {{booking.email}}  Customer Checked In:{{booking.checked_in}} </p>
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
  border: 0.5px black solid;
}
</style>
