<template>
  <div
    id="app"
  >
    <AppContainer>
      <div
        class="main-content"
      >
        <MainMenu
          class="main-content__menu"
        />
        <router-view/>
      </div>
    </AppContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainMenu from '@/components/MainMenu.vue';
import AppContainer from '@/components/AppContainer.vue';

export default Vue.extend({
  components: {
    MainMenu,
    AppContainer,
  },
});
</script>

<style lang="scss">
  html {
    min-height: 100vh;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  *::after {
    box-sizing: inherit;
  }

  *::before {
    box-sizing: inherit;
  }

  body {
    padding-top: 32px;
    padding-bottom: 32px;
    min-height: 100vh;
    min-width: 375px;
    margin: 0;
    color: #09253F;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #EFF2F5;
    background-image: url("../src/assets/img/background.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .list-reset {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  .main-content {
    padding: 24px;
    background-color: #FFFFFF;
    border-radius: 12px;
  }

  .main-content__menu {
    margin-bottom: 40px;
  }

  @media screen and(min-width: 768px) {
    body {
      padding-top: 64px;
      padding-bottom: 64px;
    }

    .main-content {
      padding: 32px;
    }
  }
</style>
