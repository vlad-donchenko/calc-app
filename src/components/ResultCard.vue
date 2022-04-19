<template>
  <div
    class="result-card"
  >
    <p
      class="result-card__title"
    >
      Result:
    </p>
    <p
      class="result-card__value"
    >
      {{ value }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ResultCard',

  props: {
    firstValue: {
      type: [String, Number],
      required: true,
    },
    secondValue: {
      type: [String, Number],
      required: true,
    },
    operation: {
      type: String,
      required: true,
    },
    result: {
      type: [String, Number],
      required: true,
    },
  },

  computed: {
    value() {
      return `${this.firstValue} ${this.operation} ${this.secondValue} = ${this.result}`;
    },
  },
});
</script>

<style scoped lang="scss">
  .result-card {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    background-color: #F8F9FA;
    border-radius: 12px;
  }

  .result-card__title {
    margin: 0;
    font-weight: 800;
    font-size: 22px;
    line-height: 32px;
  }

  .result-card__value {
    margin: 0;
    font-weight: 800;
    font-size: 18px;
    line-height: 32px;
  }
</style>
