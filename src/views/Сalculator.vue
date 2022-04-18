<template>
  <div class="calculation">
    <div class="calculation__result">
      <AppInput
        label="Result:"
        :disabled="true"
        :value="result"
      />
    </div>
    <div class="calculation__body">
      <AppInput
        v-model.number="firstValue"
        type="number"
        label="First value:"
      />
      <AppSelect
        v-model="operation"
        label="Select operation:"
        select-label="name"
        track-by="value"
        :searchable="false"
        :options="operationList"
      />
      <AppInput
        v-model.number="secondValue"
        type="number"
        label="Second value:"
      />
    </div>
    <div class="calculation__control">
      <AppButton
        label="Result"
        @click="handleResultButtonClick"
      />
      <AppButton
        label="Clean"
        :is-primary="false"
        @click="handleCleanButtonClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import AppSelect from '@/components/AppSelect.vue';
import { MathOperation } from '@/const';

export default Vue.extend({
  components: {
    AppInput,
    AppSelect,
    AppButton,
  },

  data() {
    return {
      operation: {
        name: 'Addition (+)',
        value: MathOperation.ADDITION,
      },
      firstValue: 0,
      secondValue: 0,
      result: 0,
      operationList: [
        {
          name: 'Addition (+)',
          value: MathOperation.ADDITION,
        },
        {
          name: 'Subtraction (-)',
          value: MathOperation.SUBTRACTION,
        },
        {
          name: 'Multiplication (x)',
          value: MathOperation.MULTIPLICATION,
        },
        {
          name: 'Division (÷)',
          value: MathOperation.DIVISION,
        },
      ],
    };
  },

  methods: {
    resetCalculation(): void {
      this.firstValue = 0;
      this.secondValue = 0;
      this.operation = {
        name: 'Addition (+)',
        value: MathOperation.ADDITION,
      };
    },

    getResult(operation : string): number {
      switch (operation) {
        case MathOperation.ADDITION:
          return this.firstValue + this.secondValue;
        case MathOperation.SUBTRACTION:
          return this.firstValue - this.secondValue;
        case MathOperation.MULTIPLICATION:
          return this.firstValue * this.secondValue;
        case MathOperation.DIVISION:
          return this.firstValue / this.secondValue;
        default:
          return 0;
      }
    },

    handleResultButtonClick(): void {
      this.result = this.getResult(this.operation.value);
    },

    handleCleanButtonClick(): void {
      this.resetCalculation();
    },
  },
});
</script>

<style scoped lang="scss">
  .calculation {
    max-width: 580px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .calculation__result {
    margin-bottom: 32px;
  }

  .calculation__body {
    display: grid;
    grid-gap: 16px;
    margin-bottom: 32px;
  }

  .calculation__control {
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
</style>
