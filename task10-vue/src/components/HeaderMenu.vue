<template>
  <nav :class="`menu ${state}`">
    <a v-for="link in menuLinks" :key="link" class="menu__link">{{link}}</a>
    <button :class="`menu__lang menu__lang--en ${state}`">
      <span>English</span>
      <img src="../assets/usa-flag.svg"/>
    </button>
    <button :class="`menu__lang menu__lang--es ${state}`">
      <span>Spanish</span>
      <img src="../assets/spain-flag.svg"/>
    </button>
  </nav>
</template>

<script>
  export default {
    name: 'HeaderMenu',
    props: {
      state: {
        type: String,
        default: 'hidden',
      },
    },
    data() {
      return {
        menuLinks: ['Home', 'Characters', 'Islands', 'Mist Objects']
      }
    }
  }
  </script>
