<template>
  <div class="opponent row justify-content-center">
    <div class="col-2 card-deck" v-for="card in opponentHand" @click="setActiveOpponent(card)" style="width: 15rem; height: 15rem">
      <div class="card" v-if="!card.visible">
        <img src="@/assets/back-of-card.jpg">
      </div>
      <div class="card bg-light" v-else="card">
        <img class="card-img-top" :src="card.img">
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