<template>
  <article class="article article--islands">
    <div class="article__container article__container--islands">
      <h3 class="article__title article__title--island">Islands</h3>
      <a href="#" class="article__link article__link--islands">See all</a>
    </div>
    <div class="article__flex article__flex--islands">
      <IslandCard
        v-for="(island, index) in islands"
        :key="index"
        :name="island.name"
        :img="island.img"
        :location="island.location"
      />
    </div>
  </article>
</template>

<script>
  import IslandCard from './IslandCard.vue'
  export default {
    name: 'IslandsSection',
    components: {
      IslandCard,
    },
    data() {
      return {
        islands: [{ name: 'Dawn Island', location: 'East Blue', img: require('../assets/dawn.svg')},
                  { name: 'Reverse Island', location: 'Red Line', img: require('../assets/reverse.svg')},
                  { name: 'Reverse Island', location: 'Red Line', img: require('../assets/reverse.svg')}],
      }
    },
  }
</script>
