<template>
  <section class="island">
    <div class="card-label card-label--island">
      <h4 class="card-label__name card-label__name--island">{{name}}</h4>
      <p class="card-label__description card-label__description--island">
        <i class="ico-location"></i>
        <span>{{location}}</span>
      </p>
    </div>
    <img :src="img" :alt="alt" class="island__img" />
  </section>
</template>

<script>
  export default {
    name: 'IslandCard',
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
      location: {
        type: String,
        required: true,
      },
    },
  }
</script>
