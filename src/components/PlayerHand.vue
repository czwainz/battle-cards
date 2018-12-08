<template>
  <div class="player col-6">
    <div class="div card-deck my-1" v-for="card in playerHand" @click="setActivePlayer(card)">
      <div class="card">
        <img class="card-img-top" :src="card.img" height="200" width="200">
        <h4 class="card-title">{{card.name}}</h4>
        <p>Attack: {{card.attack}}</p>
        <p>Defense: {{card.defense}}</p>
        <p>Health: {{card.health}}</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'playerHand',
    data() {
      return {

      }
    },
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