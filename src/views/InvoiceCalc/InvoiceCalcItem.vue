<template>
  <div
    class="invoice-row"
  >
    <AppTableItem
      :value="name"
      :is-highlighted="true"
    />
    <AppTableItem
      :value="price"
    />
    <AppTableItem
      :value="quantity"
    />
    <AppTableItem
      :value="sum"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppTableItem from '@/components/AppTable/AppTableItem.vue';

export default Vue.extend({
  name: 'InvoiceCalcItem',

  components: {
    AppTableItem,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: [String, Number],
      required: true,
    },
    sum: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
  .invoice-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
</style>
