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
    <p class="synopsis__text">Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated.</p>
    <p class="synopsis__text">It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as well as the home island of his father, Monkey D. Dragon.</p>
    <p :class="`synopsis__text synopsis__text--read-all ${readAll ? 'visible' : ''}`">This is also the adopted home of Portgas D. Ace after the death of his mother and the home of Sabo and his family.</p> 
    <p :class="`synopsis__text synopsis__text--read-all ${readAll ? 'visible' : ''}`">Reverse Mountain is an extremely tall mountain at one of the points where the four Blues meet and is one of the two known entrances to the Grand Line.</p>
    <p :class="`synopsis__text synopsis__text--read-all ${readAll ? 'visible' : ''}`">It is located in the Red Line and is the geographical antipode of Mary Geoise.</p>
    <button :class="`synopsis__button ${readAll ? 'clicked' : ''}`" @click="handleClick">
      <i class="ico-arrow"></i>
      <span>Read All</span>
    </button> 
  </article>
</template>

<script>
  export default {
    name: 'SynopsisSection',
    
    data() {
      return {
        readAll: false,
      }
    },
    methods: {
      handleClick() {
        this.readAll = !this.readAll;
      },
    },
  }
</script>
