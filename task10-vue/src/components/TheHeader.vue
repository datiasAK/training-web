<template>
  <header class="header">
    <i :class="`ico-menu header__icon header__icon--menu ${menuState}`" @click="handleClick"></i>
    <i :class="`ico-x header__icon header__icon--x ${menuState}`" @click="handleClick"></i>
    <img class="header__logo" src="../assets/op-logo.svg" alt="one piece logo"/>
    <div class="header__fill"></div>
    <HeaderMenu :state="menuState" />
  </header>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue';
export default {
  name: 'TheHeader',
  components: {
    HeaderMenu,
  },
  data() {
    return {
      opened: false,
      menuState: 'hidden',
    }
  },
  methods: {
    handleClick() {
      this.opened = !this.opened;
      this.menuState = this.opened ? 'opened' : 'hidden';
    },
  },
}
</script>
