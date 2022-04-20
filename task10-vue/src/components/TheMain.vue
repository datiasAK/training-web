<template>
  <main class="main">
    <SynopsisSection :width="width"/>
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
  props: {
    width: {
      type: Number,
      required: true,
    },
  },
}
</script>
