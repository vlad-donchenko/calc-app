<template>
  <button
    v-bind="$attrs"
    :type="type"
    class="button"
    :class="variant"
    @click="handleButtonClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppButton',

  props: {
    isPrimary: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'button',
    },
    label: {
      type: String,
      required: true,
    },
  },

  computed: {
    variant() {
      return this.isPrimary ? 'button--primary' : 'button--secondary';
    },
  },

  methods: {
    handleButtonClick() {
      this.$emit('click');
    },
  },
});
</script>

<style lang="scss">
  .button {
    min-width: 96px;
    padding: 15px 24px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
    line-height: 16px;
    border: 1px solid;
    border-radius: 12px;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.2s ease, border 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

    &:disabled {
      border-color: #CDD6DF;
      background-color: #CDD6DF;
      cursor: not-allowed;
    }
  }

  .button--primary {
    color: #FFFFFF;
    border-color: #2437DB;
    background-color: #2437DB;

    &:hover:not(:disabled) {
      background-color: #0E1FB4;
    }

    &:focus:not(:disabled) {
      background-color: #0E1FB4;
    }
  };

  .button--secondary {
    color: #09253F;
    background-color: #FFFFFF;
    border-color: #DEE3E8;

    &:hover:not(:disabled) {
      border-color: #99A9B8;
      box-shadow: 0 0 0 2px rgba(224, 229, 235, 0.88);
    }

    &:focus:not(:disabled) {
      border-color: #99A9B8;
      box-shadow: 0 0 0 2px rgba(224, 229, 235, 0.88);
    }
  }
</style>
