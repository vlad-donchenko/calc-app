<template>
  <div
    class="calculation-total"
  >
    <p
      class="calculation-total__label"
    >
      Total:
    </p>
    <p
      class="calculation-total__label"
    >
      {{ totalPrice }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InvoiceCalcResult',

  props: {
    totalPrice: {
      type: String,
      default: '$0',
    },
  },
});
</script>

<style scoped lang="scss">
  .calculation-total {
    display: grid;
    grid-gap: 8px;
    justify-content: flex-end;
    grid-template-columns: max-content max-content;
  }

  .calculation-total__label {
    margin: 0;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    color: #09253F;
  }
</style>
