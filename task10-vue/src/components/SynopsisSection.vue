<template>
  <div :class="`op-characters ${readAll ? 'read-all' : ''}`">
    <img
      class="op-characters__img"
      src="../assets/op-characters.svg"
      :srcSet="`${require('../assets/op-characters.svg')} 768w, ${require('../assets/op-characters-big.png')} 8530w`"
      alt="one piece main characters"
    />
    <div class="op-characters__gradient"></div>
  </div>
  <article :class="`synopsis ${readAll ? 'read-all' : ''}`">
    <img
        src="../assets/op-logo.svg"
        alt="one piece logo" 
        class="synopsis__logo"
        v-if="readAll"
    />
    <h2 class="synopsis__title">Synopsis</h2>
    <p v-for="(text, index) in filterText()" :key="index" class="synopsis__text">{{text}}</p>
    <button :class="`synopsis__button ${readAll ? 'clicked' : ''}`" @click="handleClick">
      <i class="ico-arrow"></i>
      <span>Read All</span>
    </button> 
  </article>
</template>

<script>
  export default {
    name: 'SynopsisSection',
    props: {
      width: {
        type: Number,
        required: true,
      },
    },
    
    data() {
      return {
        readAll: false,
        synopsisText: ['Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated.',
                       'It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as well as the home island of his father, Monkey D. Dragon.',
                       'This is also the adopted home of Portgas D. Ace after the death of his mother and the home of Sabo and his family.',
                       'Reverse Mountain is an extremely tall mountain at one of the points where the four Blues meet and is one of the two known entrances to the Grand Line.',
                       'It is located in the Red Line and is the geographical antipode of Mary Geoise.']
      }
    },
    methods: {
      handleClick() {
        this.readAll = !this.readAll;
      },
      filterText() {
        return this.synopsisText.filter((text, index) => index <= 1 || this.readAll || this.width >= 1280)
      }
    },
  }
</script>
