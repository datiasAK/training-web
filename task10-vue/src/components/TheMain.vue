<template>
  <main class="main">
    <SynopsisSection />
    <SearchBar />
    <CharacterSection />
    <IslandSection />
    <ObjectSection :objectCount="width < 768 ? 3 : 4"/>
  </main>
</template>

<script>
import SynopsisSection from './SynopsisSection.vue';
import SearchBar from './SearchBar.vue';
import CharacterSection from './CharacterSection.vue';
import IslandSection from './IslandSection.vue';
import ObjectSection from './ObjectSection.vue';
export default {
  name: 'App',
  components: {
    SynopsisSection,
    SearchBar,
    CharacterSection,
    IslandSection,
    ObjectSection,
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
