<template>
  <div
    class="calculation"
  >
    <InvoiceCalcForm/>
    <AppTable
      :table-head-list="[
        'Product name:',
        'Price',
        'Quantity',
        'Sum',
      ]"
      :table-body-list="getProductList"
    >
      <template
        v-slot:default="{ list }"
      >
        <InvoiceCalcItem
          v-for="(item, index) in list"
          :key="item.id"
          :index="index"
          :name="item.name"
          :quantity="item.quantity"
          :price="getFormattedPriceByCurrency(item.price)"
          :sum="getCurrentProductSum(Number(item.quantity), Number(item.price))"
        />
      </template>
    </AppTable>
    <InvoiceCalcResult
      :total-price="getFormattedPriceByCurrency(totalPrice)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import AppTable from '@/components/AppTable/AppTable.vue';
import InvoiceCalcForm from '@/views/InvoiceCalc/InvoiceCalcForm.vue';
import InvoiceCalcResult from '@/views/InvoiceCalc/InvoiceCalcResult.vue';
import InvoiceCalcItem from '@/views/InvoiceCalc/InvoiceCalcItem.vue';
import { ProductI } from '@/types';

export default Vue.extend({
  name: 'InvoiceCalc',

  components: {
    AppTable,
    InvoiceCalcItem,
    InvoiceCalcForm,
    InvoiceCalcResult,
  },

  computed: {
    ...mapGetters('calc', [
      'getProductList',
    ]),

    totalPrice(): number {
      return this.getProductList.reduce((accumulator: number, item: ProductI): number => {
        const { price, quantity } = item;
        return accumulator + (Number(price) * Number(quantity));
      }, 0);
    },
  },

  methods: {
    getFormattedPriceByCurrency(value: number): string {
      return `$${value}`;
    },

    getCurrentProductSum(quantity: number, price: number) {
      return this.getFormattedPriceByCurrency(quantity * price);
    },
  },
});
</script>

<style scoped lang="scss">
  .calculation {
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 1fr;
  }

  .calculation__result {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    padding-bottom: 10px;
    border-bottom: 1px solid #DEE3E8;
  }

  .calculation__result-title {
    margin: 0;
    font-size: 24px;
  }

  .calculation__body {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;
  }

  .calculation__control {
    display: flex;
    align-content: center;
    justify-content: flex-end;
  }
</style>
