<template lang="html">
<div class="ListItem">
  <p> Customer Name: {{booking.name}} Customer Email: {{booking.email}}  Customer Checked In:{{booking.check_in}} </p>
</div>
</template>

<script>

export default {
  name: 'list-item',
  props: ['booking']
}
</script>

<style lang="css" scoped>
.ListItem {
  border: 0.5px black solid;
}
</style>
