<template>
  <div
    class="calculation"
  >
    <form
      action=""
      method="post"
      class="calculation__form"
    >
      <div
        class="calculation__form-input-list"
      >
        <AppInput
          v-model.number="formData.name"
          type="text"
          label="Product name:"
          :is-error="$v.formData.name.$error"
          :error-message="
            `Field must be required.
             Field must have at least ${$v.formData.name.$params.minLength.min} letters`
          "
        />
        <AppInput
          v-model.number="formData.price"
          type="number"
          label="Price:"
          :is-error="$v.formData.price.$error"
          :error-message="
            `Field must be required.
             Field must be integer value  more then ${$v.formData.price.$params.minValue.min}`
          "
        />
        <AppInput
          v-model.number="formData.quantity"
          type="number"
          label="Quantity:"
          :is-error="$v.formData.quantity.$error"
          :error-message="
            `Field must be required.
             Field must be integer value  more then ${$v.formData.price.$params.minValue.min}`
          "
        />
      </div>
      <div
        class="calculation__form-submit"
      >
        <AppButton
          label="Add"
          @click="handleAddButtonClick"
        />
      </div>
    </form>
    <AppTable
      :table-head-list="[
        'Product name:',
        'Price',
        'Quantity',
        'Sum',
      ]"
      :table-body-list="list"
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
          @on-delete-button-click="handleDeleteButtonClick"
        />
      </template>
    </AppTable>
    <div
      class="calculation__footer"
    >
      <div
        class="calculation__total"
      >
        <p
          class="calculation__total-label"
        >
          Total:
        </p>
        <p
          class="calculation__total-label"
        >
          {{ getFormattedPriceByCurrency(totalPrice) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  required, minLength, integer, minValue,
} from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';
import Vue from 'vue';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import AppTable from '@/components/AppTable/AppTable.vue';
import InvoiceCalcItem from '@/views/InvoiceCalc/InvoiceCalcItem.vue';
import { getRandomId } from '@/utils';
import { ProductI } from '@/types';

export default Vue.extend({
  name: 'InvoiceCalc',

  mixins: [validationMixin],

  components: {
    AppTable,
    AppInput,
    AppButton,
    InvoiceCalcItem,
  },

  data() {
    return {
      formData: {
        name: '',
        price: '',
        quantity: '',
      },
      list: [] as Array<ProductI>,
    };
  },

  validations() {
    return {
      formData: {
        name: {
          required,
          minLength: minLength(4),
        },
        price: {
          integer,
          required,
          minValue: minValue(1),
        },
        quantity: {
          integer,
          required,
          minValue: minValue(1),
        },
      },
    };
  },

  mounted() {
    this.setProductListOnStart();
  },

  watch: {
    list(newList: Array<ProductI> | []): void {
      localStorage.setItem('productList', JSON.stringify(newList));
    },
  },

  computed: {
    totalPrice(): number {
      return this.list.reduce((accumulator, item) => {
        const { price, quantity } = item;
        return accumulator + (Number(price) * Number(quantity));
      }, 0);
    },
  },

  methods: {
    setProductListOnStart(): void {
      const savedProductList: string | null = localStorage.getItem('productList');

      if (!savedProductList) {
        return;
      }

      this.list = JSON.parse(savedProductList);
    },

    getFormattedPriceByCurrency(value: number): string {
      return `$${value}`;
    },

    getCurrentProductSum(quantity: number, price: number) {
      return this.getFormattedPriceByCurrency(quantity * price);
    },

    addNewProduct(): void {
      const { name, price, quantity } = this.formData;

      this.list.push({
        id: getRandomId(),
        name,
        price,
        quantity,
      });
    },

    removeProduct(index: number): void {
      this.list.splice(index, 1);
    },

    resetForm(): void {
      this.$v.$reset();

      this.formData.name = '';
      this.formData.price = '';
      this.formData.quantity = '';
    },

    handleDeleteButtonClick(index: number): void {
      this.removeProduct(index);
    },

    handleAddButtonClick(): void {
      this.$v.$touch();

      if (!this.$v.$error) {
        this.addNewProduct();
        this.resetForm();
      }
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

  .calculation__form {
    display: grid;
    grid-gap: 16px;
  }

  .calculation__form-submit {
    display: flex;
    justify-content: flex-end;
  }

  .calculation__form-input-list {
    display: grid;
    grid-gap: 16px;
    align-items: flex-start;
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

  .calculation__total-label {
    margin: 0;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    color: #09253F;
  }

  .calculation__total {
    display: grid;
    grid-gap: 8px;
    justify-content: flex-end;
    grid-template-columns: max-content max-content;
  }

  @media screen and(min-width: 768px) {
    .calculation__form-input-list {
      grid-template-columns: 2fr 1fr 1fr;
    }
  }

  @media screen and(min-width: 992px) {
    .calculation__form {
      grid-gap: 64px;
      grid-template-columns: 1fr max-content;
    }

    .calculation__form-submit {
      display: block;
      padding-top: 24px;
    }
  }

  @media screen and(min-width: 1280px) {
    .calculation__form {
      grid-gap: 64px;
      justify-content: space-between;
      grid-template-columns: 870px max-content;
    }
  }
</style>
