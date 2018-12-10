<template>
  <div v-if="game.id" class="gameView container-fluid">
    <div v-if="!game.over">
      <div class="row justify-content-center d-block">
        <h1>Battle Arena</h1>
        <small class="text-primary">choose one player card & one opponent card to begin</small><br>
        <button :disabled="!ready()" :class="{'btn-warning':ready()}" class="btn btn-primary btn-lg" @click="attack">PLAY</button>
      </div>
      <div class="row name justify-content-center">
        <h3 class="player">{{game.player.name}}&emsp;</h3>
        <p>··vs··&emsp;&emsp;</p>
        <h3 class="opponent"><strong>{{game.opponent.name}}</strong></h3>
      </div>
      <div class="row playerGame bg-info">
        <div class="col-12">
          <PlayerHand></PlayerHand>
        </div>
      </div>
      <div class="row opponentGame bg-secondary">
        <div class="col-12">
          <OpponentHand></OpponentHand>
        </div>
      </div>
    </div>
    <div class="row gameOver" v-else="game.over">
      <div class="col-12 mt-5 justify-content-center align-items-center">
        <h2 class="pt-4 gameOver">·GAME OVER·</h2>
        <h4 class="gameOver">{{game.winner}}<br>is victorious!</h4>
        <br>
        <div class="col-12 justify-content-between">
          <i class="far fa-sun fa-3x b text-primary mr-3"></i>
          <i class="far fa-sun fa-5x a mr-3"></i>
          <i class="far fa-sun fa-3x b text-primary"></i>
        </div>
        <div class="col-12 newGame">
          <br>
          <h1>·.·.· <router-link :to="{name: 'home'}">New Battle</router-link> ·.·.·</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PlayerHand from '@/components/PlayerHand.vue'
  import OpponentHand from '@/components/OpponentHand.vue'

  export default {
    name: 'game',
    data() { return {} },
    computed: {
      game() { return this.$store.state.game },
      playerCardId() { return this.$store.state.playerCardId },
      opponentCardId() { return this.$store.state.opponentCardId }
    },
    mounted() {
      this.$store.dispatch('getGame', this.$route.params.gameId)
    },
    methods: {
      ready() { return this.playerCardId && this.opponentCardId },
      attack() {
        let payload = {
          attackObject: {
            playerCardId: this.playerCardId,
            opponentCardId: this.opponentCardId
          },
          gameId: this.game.id
        }
        this.$store.dispatch('attack', payload)
      }
    },
    components: {
      PlayerHand,
      OpponentHand
    }
  }
</script>

<style>
  .btn-lg {
    font-size: 25px;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 2%;
    padding-right: 2%;
  }

  h1 {
    color: var(--primary);
    font-family: 'Fredoka One', cursive;
    text-shadow: 2px 2px 5px var(--gray);
    font-size: 60px;
  }

  .gameView {
    background-image: linear-gradient(#20c997, #29ABE0, #29ABE0, #29ABE0)
  }

  .gameOver {
    background-color: rgb(109, 111, 103);
  }

  .playerGame {
    background-image: linear-gradient(#29ABE0, #93C54B)
  }

  .opponentGame {
    background-image: linear-gradient(#93C54B, #29ABE0)
  }

  .newGame {
    color: #20c997 !important;
  }

  h2.gameOver {
    font-family: 'Press Start 2P', cursive;
    font-size: 50px;
    text-shadow: 1px 1px 3px whitesmoke;
  }

  h4.gameOver {
    font-family: 'Press Start 2P', cursive;
    color: #20c997;
    font-size: 35px;
    text-shadow: 1px 1px 3px var(--primary);
  }

  h3.player {
    font-family: 'Shadows Into Light Two', cursive;
  }

  h3.opponent {
    font-family: 'Roboto Condensed', sans-serif;
  }

  i.a {
    background-color: var(--primary);
    border-radius: 50%;
    padding: 10px;
    color: var(--teal);
  }

  i.text-primary {
    background-color: var(--teal);
    border-radius: 50%;
    padding: 10px;
  }
</style>