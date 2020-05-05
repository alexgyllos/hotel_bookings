<template lang="">
  <form class="form" v-on:submit.prevent="addBooking" method="post">
    <h2>Add a Booking</h2>
    <!-- <div class=""> -->
      <label for="name">Name</label>
      <input type="text" v-model="name" required/>
    <!-- </div> -->
    <br>
    <!-- <div class=""> -->
      <label for="email">Email</label>
      <input type="text" v-model="email" required/>
    <!-- </div> -->

    <br>
    <input type="submit" value="Add">
    <br>
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
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input[type=submit] {
    width: 150px;
  }

  input[type=text] {
    width: 150px;
    border: 1px solid black;
  }
</style>
