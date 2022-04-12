<template>
  <section class="mist-object">
    <img :src="img" :alt="alt" class="mist-object__img"/>
    <div class="card-label card-label--mist">
      <h4 class="card-label__name card-label__name--mist">{{name}}</h4>
      <p class="card-label__description card-label__description--mist">
        {{description}}
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'MistObjectCard',
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
      description: {
        type: String,
        required: true,
      },
    },
  }
</script>
