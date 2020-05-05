<template>
  <div id="app">
    <h1>Hotel Transylvania!</h1>
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
      this.bookings.slice(index, 1);
    });

    eventBus.$on('booking-updated', (updatedBooking) => {
      const index = this.bookings.findIndex(booking => booking._id === updatedBooking._id);
      this.bucketList.splice(index, 1, updatedBooking);
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
