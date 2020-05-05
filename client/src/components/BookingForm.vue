<template lang="">
  <form class="" v-on:submit.prevent="addBooking" method="post">
    <h2>Add a Booking</h2>
    <label for="name">Name:</label>
    <input type="text" v-model="name" required/>
    <label for="email">Email:</label>
    <input type="text" v-model="email" required/>

    <input type="submit" value="Add">
  </form>
</template>

<script>
import BookingService from '@/services/BookingService.js';
import {eventBus} from '@/main.js'

export default {
  name: 'booking-form',
  data() {
    return {
      name: '',
      email: '',
      checked_in: false
    }
  },
  methods: {
    addBooking(event){
      const newBooking = {
        name: this.name,
        email: this.email,
        checked_in: false
      }
      BookingService.addBooking(newBooking)
      .then(booking => eventBus.$emit('booking-added', booking))

      this.name = '',
      this.email = '',
      this.checked_in = false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
