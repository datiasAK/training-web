<template>
  <nav :class="`menu ${state}`">
    <a href="#" class="menu__link">Home</a>
    <a href="#" class="menu__link">Characters</a>
    <a href="#" class="menu__link">Islands</a>
    <a href="#" class="menu__link">Mist Objects</a>
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
  }
  </script>
