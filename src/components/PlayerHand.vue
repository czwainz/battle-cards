<template>
  <div class="player row justify-content-around">
    <div class="col-2 card-deck py-2" v-for="card in playerHand" @click="setActivePlayer(card)">
      <div class="card bg-primary" style="width: 18rem;">
        <img class="card-img" :src="card.img" height="200px">
        <div class="card-img-overlay">
          <strong>
            <h5 class="card-title">{{card.name}}</h5>
            <p class="card-text">Attack: {{card.attack}}
              <br>Defense: {{card.defense}}
              <br>Health: {{card.health}}</p>
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