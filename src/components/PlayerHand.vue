<template>
  <div class="player row justify-content-around d-flex flex-wrap">
    <div class="col-1 card-deck py-2" style="max-width: 10rem;" v-for="card in playerHand" @click="setActivePlayer(card)">
      <div class="card bg-primary">
        <img class="card-img" :src="card.img" height="150px">
        <div class="card-img-overlay">
          <strong>
            <h5 class="card-title">{{card.name}}</h5>
            <p class="card-text">{{card.attack}} &nbsp;&nbsp; Attack
              <br>{{card.defense}}&nbsp;&nbsp;Defense
              <br>{{card.health}}&nbsp;&nbsp;Health</p>
          </strong>
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
  .player .card:hover {
    box-shadow: 5px 5px var(--teal);
    transform: scale(1.02);
  }
</style>