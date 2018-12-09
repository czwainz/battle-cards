<template>
  <div class="player row justify-content-center">
    <div class="col-2 card-deck" v-for="card in playerHand" @click="setActivePlayer(card)"">
      <div class=" card
      bg-light my-1">
      <img class="card-img-top" :src="card.img" height="90px">
      <div class="card-body">
        <h6 class="card-title">{{card.name}}</h6>
        <p class="card-text">Attack: {{card.attack}}
          <br>Defense: {{card.defense}}
          <br>Health: {{card.health}}</p>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    name: 'playerHand',
    data() { return {} },
    computed: {
      playerHand() {
        return this.$store.state.game.player.hand
      }
    },
    methods: {
      setActivePlayer(playerCard) {
        this.$store.dispatch('setActivePlayer', playerCard)
      }
    }
  }

</script>

<style>

</style>