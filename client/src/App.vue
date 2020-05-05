<template>
  <div id="app">
    <h1>Hotel Booker</h1>
    <booking-form></booking-form>
    <booking-list :bookings="bookings"></booking-list>
  </div>
</template>

<script>
import BookingForm from '@/components/BookingForm.vue';
import BookingList from '@/components/BookingList.vue';
import BookingService from '@/services/BookingService.js';
import {eventBus} from '@/main.js';

export default {
  name: 'App',
  data() {
    return {
      bookings: [],
    };
  },
  mounted(){
    this.fetchBookings();

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking);
    });

    eventBus.$on('delete-booking', (id) => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    });

    eventBus.$on('booking-updated', (updatedBooking) => {
      const index = this.bookings.findIndex(booking => booking._id === updatedBooking._id);
      this.bookings.splice(index, 1, updatedBooking);
    });
  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
      .then(hotelBookings => this.bookings = hotelBookings)
    },
  },
  components: {
    'booking-form': BookingForm,
    'booking-list': BookingList,
  },
}
</script>

<style>
html {
  background-image: url("https://images.unsplash.com/photo-1588607725406-c514f1acab95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin: auto;
  background-attachment: fixed;
}

input[type=submit] {
  padding: 8px;
  margin: 5px;
  border: 1px solid black;
}

button {
  padding: 8px;
  margin: 5px;
  border: 1px solid black;
}

body {
  width: 70%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* width: 70%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  border: 1px solid black;
  background: rgba(34, 36, 57, 0.9);
  color: white;
  padding: 5px;
}
</style>
