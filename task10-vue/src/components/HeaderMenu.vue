<template>
  <nav :class="`menu ${state}`">
    <a v-for="link in menuLinks" :key="link" class="menu__link">{{link}}</a>
    <IconButton
      v-for="btn in menuBtns"
      :key="btn.text"
      :text="btn.text"
      :img="btn.img"
      :alt="btn.alt"
      :className="`menu__lang menu__lang--${btn.modifier} ${state}`"
    />
  </nav>
</template>

<script>
  import IconButton from './IconButton.vue'
  export default {
    name: 'HeaderMenu',
    components: {
      IconButton
    },
    props: {
      state: {
        type: String,
        default: 'hidden',
      },
    },
    data() {
      return {
        menuLinks: ['Home', 'Characters', 'Islands', 'Mist Objects'],
        menuBtns: [
          {text: 'English', img: require('../assets/usa-flag.svg'), alt: 'usa flag', modifier: 'en'},
          {text: 'Spanish', img: require('../assets/spain-flag.svg'), alt: 'spain flag', modifier: 'es'}
        ],
      }
    }
  }
  </script>
