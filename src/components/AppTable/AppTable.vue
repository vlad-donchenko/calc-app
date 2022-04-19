<template>
    <div
      class="table"
    >
      <div
        class="table__inner"
        :style="tableColumn"
      >
        <div
          class="table__header-item"
          v-for="item in tableHeadList"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
      <template
        v-if="tableBodyList.length"
      >
        <slot
          :list="tableBodyList"
        />
      </template>
      <p
        v-else
        class="table__empty-title"
      >
        No available items
      </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface tableColumnI {
  gridTemplateColumns: string
}

export default Vue.extend({
  name: 'AppTable',

  props: {
    tableHeadList: {
      type: Array,
      default: () => [],
    },
    tableBodyList: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    tableColumn(): tableColumnI {
      return {
        gridTemplateColumns: `repeat(${this.tableHeadList.length}, 1fr)`,
      };
    },
  },
});
</script>

<style scoped lang="scss">
  .table {
    overflow-y: hidden;
    overflow-x: auto;
  }

  .table__inner {
    display: grid;
    min-width: 656px;
  }

  .table__header-item {
    padding: 16px 24px;
    color: #99A9B8;
    font-weight: 800;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    background-color: #F8F9FA;

    &:first-child {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }

    &:last-child {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }

  .table__empty-title {
    margin: 50px 0 25px 0;
    text-align: center;
    font-weight: 500;
    color: #BAC5CF;
    font-size: 18px;
  }
</style>
