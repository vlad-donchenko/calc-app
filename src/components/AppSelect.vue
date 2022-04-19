<template>
  <div
    class="select"
  >
    <p
      v-if="label"
      class="select__label"
    >
      {{ label }}
    </p>
    <MultiSelect
      v-if="options.length"
      v-bind="$attrs"
      v-on="$listeners"
      :options="options"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MultiSelect from 'vue-multiselect';

export default Vue.extend({
  name: 'AppSelect',

  components: {
    MultiSelect,
  },

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style lang="scss">
  @import "~vue-multiselect/dist/vue-multiselect.min.css";

  .select {
    display: grid;
    grid-gap: 8px;
  }

  .select__label {
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #09253F;
  }

  .select .multiselect {
    box-sizing: border-box;
  }

  .select .multiselect__single,
  .select .multiselect__input {
    margin-bottom: 0;
    padding-left: 0;
    font-size: 16px;
    height: 24px;
    line-height: 24px;
    font-weight: 500;
    font-family: inherit;
    color: #09253F;
  }

  .select .multiselect__placeholder {
    margin: 0;
    padding: 0;
    line-height: 24px;
    font-size: 16px;
    font-weight: 500;
    font-family: inherit;
    color: #BAC5CF;
  }

  .select .multiselect__tags {
    padding: 11px 48px 11px 24px;
    border-radius: 12px;
    border-color: #DEE3E8;

    &:hover {
      border-color: #99A9B8;
    }
  }

  .select .multiselect--active .multiselect__tags {
    border-color: #99A9B8;
    box-shadow: 0 0 0 2px #EBEDFA;
  }

  .select .multiselect__select {
    width: 48px;
    height: 100%;
    background-size: 16px 16px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../assets/img/arrow.svg");

    &::before {
      display: none;
    }
  }

  .select .multiselect__content-wrapper {
    padding: 8px;
    border-color: #E6EBEF;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  .select .multiselect__option {
    color: #70869A;
    font-size: 14px;
    line-height: 16px;
    transition: all 0.2s ease;
  }

  .select .multiselect__option--highlight {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #09253F;
    background: #F8F9FA;
    border-radius: 8px;

    &::after {
      display: none;
    }
  }

  .multiselect__option--selected {
    padding-right: 32px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    border-radius: 8px;

    &::after {
      display: none;
    }

    &::before {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 32px;
      background-size: 12px 12px;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("../assets/img/check.svg");
    }
  }
</style>
