<template>
  <form
    action=""
    method="post"
    class="calculation-form"
  >
    <div
      class="calculation-form__list"
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
      class="calculation-form__submit"
    >
      <AppButton
        label="Add"
        @click="handleAddButtonClick"
      />
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import {
  required, minLength, integer, minValue,
} from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import { getRandomId } from '@/utils';

export default Vue.extend({
  name: 'InvoiceCalcForm',

  mixins: [validationMixin],

  components: {
    AppInput,
    AppButton,
  },

  data() {
    return {
      formData: {
        name: '',
        price: '',
        quantity: '',
      },
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

  methods: {
    ...mapActions('calc', [
      'addNewProduct',
    ]),

    setNewProduct() {
      const { name, price, quantity } = this.formData;

      this.addNewProduct({
        id: getRandomId(),
        name,
        price,
        quantity,
      });
    },

    resetForm(): void {
      this.$v.$reset();

      this.formData.name = '';
      this.formData.price = '';
      this.formData.quantity = '';
    },

    handleAddButtonClick(): void {
      this.$v.$touch();

      if (!this.$v.$error) {
        this.setNewProduct();
        this.resetForm();
      }
    },
  },
});
</script>

<style scoped lang="scss">
  .calculation-form {
    display: grid;
    grid-gap: 16px;
  }

  .calculation-form__list {
    display: grid;
    grid-gap: 16px;
    align-items: flex-start;
  }

  .calculation-form__submit {
    display: flex;
    justify-content: flex-end;
  }

  @media screen and(min-width: 768px) {
    .calculation-form__list {
      grid-template-columns: 2fr 1fr 1fr;
    }
  }

  @media screen and(min-width: 992px) {
    .calculation-form {
      grid-gap: 64px;
      grid-template-columns: 1fr max-content;
    }

    .calculation-form__submit {
      display: block;
      padding-top: 24px;
    }
  }

  @media screen and(min-width: 1280px) {
    .calculation-form {
      grid-gap: 64px;
      justify-content: space-between;
      grid-template-columns: 870px max-content;
    }
  }
</style>
