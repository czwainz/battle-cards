<template>
  <div class="opponent row justify-content-around">
    <div class="col-2 card-deck pt-2" v-for="card in opponentHand" @click="setActiveOpponent(card)">
      <div class="card" v-if="!card.visible">
        <img src="@/assets/pretty-flower.jpg" height="200px">
      </div>
      <div class="card bg-primary" v-else="card">
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
  .card-deck {
    color: var(--primary);

    font-family: 'Baloo', cursive;
  }

  .card {
    min-width: 10rem;
    text-shadow: 0px 0px 3px var(--success), 0px 0px 5px var(--light);
    box-shadow: 0px 0px 2px var(--primary);
    transition: .3s linear;
    background-color: var(--light)
  }

  .opponent .card {
    text-shadow: 0px 0px 3px var(--danger), 0px 0px 5px var(--light);
  }

  img {
    border-radius: 5%;
  }

  .card-title {
    color: var(--gray-dark)
  }

  .opponent .card:hover {
    box-shadow: 5px 5px var(--danger);
    transform: scale(1.02);
  }
</style>