<template>
  <div
    class="home"
  >
    <p
     class="home__title"
    >
      All Result
    </p>
    <div
      v-if="getResultList.length"
      class="home__list"
    >
      <ResultCard
        v-for="item in getResultList"
        :key="item.id"
        :result="item.result"
        :operation="item.operation"
        :first-value="item.firstValue"
        :second-value="item.secondValue"
      />
    </div>
    <p
      v-else
      class="home__empty-result"
    >
      No available results
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import ResultCard from '@/components/ResultCard.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    ResultCard,
  },

  computed: {
    ...mapGetters([
      'getResultList',
    ]),
  },
});
</script>

<style scoped lang="scss">
  .home__title {
    margin-top: 0;
    margin-bottom: 32px;
    text-align: center;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
  }

  .home__list {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr;
  }

  .home__empty-result {
    text-align: center;
    font-size: 18px;
    color: #99A9B8;
  }

  @media screen and(min-width: 768px) {
    .home__list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and(min-width: 1280px) {
    .home__list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
