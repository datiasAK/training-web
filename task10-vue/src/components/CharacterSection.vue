<template>
  <article class="article article--characters">
    <div class="article__container article__container--characters">
      <h3 class="article__title article__title--characters">Characters</h3>
      <a href="#" class="article__link article__link--characters">See all</a>
    </div>
    <div class="article__flex article__flex--characters">
      <CharacterCard
        v-for="character in characters"
        :key="character.name"
        :name="character.name"
        :img="character.img"
      />
    </div>
  </article>
</template>

<script>
  import CharacterCard from './CharacterCard.vue';
  export default {
    name: 'CharacterSection',
    components: {
      CharacterCard,
    },
    
    data() {
      return {
        characters : [{ name: 'Monkey D. Luffy', img: require('../assets/monkeydluffy.svg')},
                      { name: 'Portgas D. Ace', img: require('../assets/ace.svg')},
                      { name: 'Roronoa Zoro', img: require('../assets/zoro.svg')},
                      { name: 'Nico Robin', img: require('../assets/nico.svg')}]
      }
    }
  }
</script>
