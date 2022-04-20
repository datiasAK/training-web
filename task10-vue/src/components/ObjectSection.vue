<template>
  <article className="article article--mist">
    <div className="article__container article__container--mist">
      <h3 className="article__title article__title--mist">Mist Objects</h3>
      <a href="#" className="article__link article__link--mist">See all</a>
    </div>
    <div className="article__flex article__flex--mist">
      <MysticObjectCard
        v-for="mistObject in createObjects(objectCount)"
        :key="mistObject.name"
        :name="mistObject.name"
        :img="mistObject.img"
        :alt="mistObject.name"
        :description="mistObject.description"
      />
    </div>
  </article>
</template>

<script>
  import MysticObjectCard from './MysticObjectCard.vue'
  export default {
  
    name: 'MistSection',
    components: {
      MysticObjectCard,
    },
    props: {
      objectCount: {
        type: Number,
        required: true,
      },
    },
    methods: {
      createObjects(objectCount) {
        const mistObjects = []
        for (let i = 0; i < objectCount; i++) {
          mistObjects.push({
            name: 'Gomu Gomu no Mi',
            img: require('../assets/object.svg'),
            description:`Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human.
                         It was then accidentally eaten by the series protagonist, Monkey D. Luffy.`,
          })
        }
        return mistObjects;
      }
    },
  }
</script>
