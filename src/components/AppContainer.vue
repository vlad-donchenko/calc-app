<template>
  <div
    v-bind="$attrs"
    class="container"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppContainer',
});
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and(min-width: 768px) {
    .container {
      padding-left: 24px;
      padding-right: 24px;
    }
  }

  @media screen and(min-width: 1280px) {
    .container {
      max-width: 1440px;
    }
  }
</style>
