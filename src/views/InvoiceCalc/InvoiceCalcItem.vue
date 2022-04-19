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
      class="invoice-row__action"
    >
      {{ sum }}
      <AppButton
        :is-primary="false"
        label="Delete"
        @click="handleDeleteButtonClick"
      />
    </AppTableItem>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppButton from '@/components/AppButton.vue';
import AppTableItem from '@/components/AppTable/AppTableItem.vue';

export default Vue.extend({
  name: 'InvoiceCalcItem',

  components: {
    AppButton,
    AppTableItem,
  },

  props: {
    index: {
      type: Number,
      required: true,
    },
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

  methods: {
    handleDeleteButtonClick(): void {
      this.$emit('on-delete-button-click', this.index);
    },
  },
});
</script>

<style scoped lang="scss">
  .invoice-row {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
  }

  .invoice-row__action {
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
