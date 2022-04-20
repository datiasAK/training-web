<template>
  <TheHeader :width="width"/>
  <TheMain :width="width"/>
  <TheFooter />
</template>

<script>
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },

  beforeUnmount() { 
    window.removeEventListener('resize', this.onResize); 
  },
  data() {
    return {
      width: window.innerWidth,
    }
  },
  methods: {
    onResize() {
      this.width = window.innerWidth
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&display=swap');
  @import url(../style.css);
</style>
