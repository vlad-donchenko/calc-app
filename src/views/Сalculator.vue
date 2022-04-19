<template>
  <div
    class="calculation"
  >
    <div
      class="calculation__result"
    >
      <p
        class="calculation__result-title"
      >
        Result:
      </p>
      <p
        class="calculation__result-title"
      >
        {{ result }}
      </p>
    </div>
    <div
      class="calculation__body"
    >
      <AppInput
        v-model.number="firstValue"
        type="number"
        label="First value:"
      />
      <AppSelect
        v-model="operation"
        label="Select operation:"
        :searchable="false"
        :options="operationList"
      />
      <AppInput
        v-model.number="secondValue"
        type="number"
        label="Second value:"
      />
    </div>
    <div
      class="calculation__control"
    >
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
import { mapActions } from 'vuex';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import AppSelect from '@/components/AppSelect.vue';
import { MathOperation, MathOperationMap } from '@/const';
import { getResultValueByOperation, getRandomId } from '@/utils';

export default Vue.extend({
  components: {
    AppInput,
    AppSelect,
    AppButton,
  },

  data() {
    return {
      result: Number(localStorage.getItem('result')) || 0,
      firstValue: Number(localStorage.getItem('firstValue')) || 0,
      secondValue: Number(localStorage.getItem('secondValue')) || 0,
      operation: localStorage.getItem('operation') || MathOperation.ADDITION,
      operationList: [
        MathOperation.ADDITION,
        MathOperation.SUBTRACTION,
        MathOperation.MULTIPLICATION,
        MathOperation.DIVISION,
      ],
    };
  },

  watch: {
    result(value): void {
      localStorage.setItem('result', value);
    },

    firstValue(value): void {
      localStorage.setItem('firstValue', value);
    },

    secondValue(value): void {
      localStorage.setItem('secondValue', value);
    },

    operation(value): void {
      localStorage.setItem('operation', value);
    },
  },

  methods: {
    ...mapActions([
      'addResultItem',
    ]),

    resetCalculation(): void {
      this.result = 0;
      this.firstValue = 0;
      this.secondValue = 0;
      this.operation = MathOperation.ADDITION;
    },

    handleResultButtonClick(): void {
      this.result = getResultValueByOperation(
        this.operation,
        this.firstValue,
        this.secondValue,
      );

      this.addResultItem({
        id: getRandomId(),
        firstValue: this.firstValue,
        secondValue: this.secondValue,
        operation: MathOperationMap[this.operation],
        result: this.result,
      });
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
    margin-bottom: 32px;
  }

  .calculation__control {
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
</style>
