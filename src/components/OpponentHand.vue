<template>
  <div class="opponent col-6">
    <div class="div card-deck my-1" v-for="card in opponentHand" @click="setActiveOpponent(card)">
      <div class="card" v-if="!card.visible">
        <h1>IM HIDDEN</h1>
        <!-- MAKE IMAGE FOR BACK OF CARD-->
      </div>
      <div class="card" v-else="card">
        <img class="card-img-top" :src="card.img" height="200">
        <h4 class="card-title">{{card.name}}</h4>
        <p>Attack: {{card.attack}}</p>
        <p>Defense: {{card.defense}} </p>
        <p>Health: {{card.health}}</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'opponentHand',
    data() {
      return {

      }
    },
    computed: {
      opponentHand() {
        return this.$store.state.game.opponent.hand
      }
    },
    methods: {
      setActiveOpponent(opponentCard) {
        this.$store.dispatch('setActiveOpponent', opponentCard)
      }
    }
  }

</script>

<style>


</style>