<template lang="html">
 <div id="BookingList">
   <list-item v-for="booking, index in bookings" :key="index" :booking="booking"></list-item>
 </div>
</template>

<script>

import ListItem from './ListItem'

export default {
  name: "booking-list",
  components: {
    'list-item': ListItem
  },
  props: ['bookings']
}
</script>

<style lang="css" scoped>
  #BookingList {
    margin-bottom: 50px;
  }
</style>
