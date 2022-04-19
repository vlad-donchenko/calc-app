<template>
    <div
      class="table-item"
      :class="isHighlighted ? 'table-item--highlighted' : ''"
    >
      {{ value }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppTableItem',

  props: {
    isHighlighted: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
});
</script>

<style scoped lang="scss">
  .table-item {
    padding: 16px 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #70869A;
  }

  .table-item--highlighted {
    font-weight: 800;
    color: #09253F;
  }
</style>
