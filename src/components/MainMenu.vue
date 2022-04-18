<template>
  <nav
    v-bind="$attrs"
    class="main-nav"
  >
    <ul
      class="main-nav__list list-reset"
    >
      <li
        class="main-nav__item"
      >
        <router-link
          :to="{
            name: 'Home'
          }"
          class="main-nav__link"
          exact-active-class="main-nav__link--active"
        >
          Home
        </router-link>
      </li>
      <li
        class="main-nav__item"
      >
        <router-link
          :to="{
            name: 'Calculator'
          }"
          class="main-nav__link"
          exact-active-class="main-nav__link--active"
        >
          Calculator
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  .main-nav__link {
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    color: #99A9B8;
    text-decoration: none;

    &:hover:not(.main-nav__link--active) {
      color: #70869A;
    }
  }

  .main-nav__list {
    display: flex;
  }

  .main-nav__item {
    margin-left: 20px;

    &:first-child {
      margin-left: 0;
    }
  }

  .main-nav__link--active {
    color: #2437DB;
  }
</style>
