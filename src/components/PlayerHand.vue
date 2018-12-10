<template>
  <div class="player row justify-content-around">
    <div class="col-2 card-deck pb-2" v-for="card in playerHand" @click="setActivePlayer(card)">
      <div class="card bg-primary" style="width: 18rem;">
        <img class="card-img" :src="card.img" height="200px">
        <div class="card-img-overlay">
          <strong>
            <h5 class="card-title text-black">{{card.name}}</h5>
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
  .card {
    color: var(--warning);
    text-shadow: 1px 1px 2px black, 0 0 25px white, 0 0 5px var(--blue);
  }

  .card-title {
    color: var(--cyan)
  }

  /* .card-title {
    color: var(--secondary)
  } */
</style>