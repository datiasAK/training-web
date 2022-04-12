<template>
  <main class="main">
    <SynopsisSection />
    <SearchBar />
    <CharacterSection />
    <IslandSection />
    <ObjectSection />
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
}
</script>
