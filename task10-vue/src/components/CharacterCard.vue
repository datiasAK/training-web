<template>
  <section class="character">
    <div class="character__gradient"></div>
    <h4 class="character__name">{{name}}</h4>
    <img :src="img" :alt="alt" class="character__img"/>
  </section>
</template>

<script>
  export default {
    name: 'CharacterCard',
    props: {
      name: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
      },
    },
  }
</script>
