<template>
  <div
    class="input"
  >
    <label
      class="input__label"
      :for="inputId"
    >
      {{ label }}
    </label>
    <input
      v-model="model"
      class="input__control"
      :id="inputId"
      :type="type"
      :value="value"
      :name="inputName"
      :disabled="disabled"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
import Vue from 'vue';
import { getRandomId } from '@/utils';

export default Vue.extend({
  name: 'AppInput',

  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
      default: '',
    },
  },

  inheritAttrs: false,

  computed: {
    model: {
      set(value) {
        this.$emit('input', value);
      },

      get() {
        return this.value;
      },
    },

    inputName() {
      return this.name || this.label.toLowerCase();
    },

    inputId() {
      return getRandomId();
    },
  },

  methods: {
    getRandomId,
  },
});
</script>

<style scoped lang="scss">
  .input {
    display: grid;
    grid-gap: 8px;
  }

  .input__control {
    width: 100%;
    height: 48px;
    padding: 10px 24px;
    min-height: 100%;
    font-weight: 500;
    font-size: 16px;
    appearance: none;
    border: 1px solid #DEE3E8;
    transition: all 0.2s ease;
    border-radius: 12px;

    &:disabled {
      background-color: #F8F9FA;
    }

    &:hover:not(:disabled) {
      border-color: #99A9B8;
    }

    &:focus:not(:disabled) {
      outline: none;
      border-color: #99A9B8;
      box-shadow: 0 0 0 2px #EBEDFA;
    }

    &:disabled::placeholder {
      color: #99A9B8;
    }

    &::placeholder {
      color: #BAC5CF;
    }

    &[type="search"]::-ms-clear,
    &[type="search"]::-ms-reveal {
      display: none;
      width: 0;
    }

    &[type="search"]::-webkit-search-decoration,
    &[type="search"]::-webkit-search-cancel-button,
    &[type="search"]::-webkit-search-results-button,
    &[type="search"]::-webkit-search-results-decoration {
      display: none;
    }

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance:textfield;
    }
  }

  .input__label {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #09253F;
  }
</style>
