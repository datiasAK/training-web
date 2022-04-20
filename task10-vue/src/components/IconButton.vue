<template>
  <button :class="className">
    <span>{{text}}</span>
    <img :src="img" :alt="alt">
  </button>
</template>

<script>
  export default {
    name: 'IconButton',
    props: {
      text: {
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
      className: {
        type: String,
      },
    },
  }
  </script>
