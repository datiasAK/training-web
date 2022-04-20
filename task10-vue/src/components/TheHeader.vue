<template>
  <header class="header">
    <i :class="`ico-menu header__icon header__icon--menu`" v-if="!opened" @click="handleClick"></i>
    <i :class="`ico-x header__icon header__icon--x `" v-if="opened" @click="handleClick"></i>
    <img class="header__logo" src="../assets/op-logo.svg" alt="one piece logo"/>
    <div class="header__fill"></div>
    <HeaderMenu :opened="opened || width >= 1280" />
  </header>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue';
export default {
  name: 'TheHeader',
  components: {
    HeaderMenu,
  },
  props: {
    width: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      opened: false,
    }
  },
  methods: {
    handleClick() {
      this.opened = !this.opened;
    },
  },
}
</script>
