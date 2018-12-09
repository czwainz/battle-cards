<template>
  <div v-if="game.id" class="gameView container-fluid">
    <div v-if="!game.over">
      <div class="row justify-content-center d-block">
        <h1 style="color: black;">Let's Battle</h1>
        <button :disabled="!ready()" :class="{'btn-success':ready()}" class="btn btn-primary" @click="attack">PLAY</button>
      </div>
      <div class="row name d-block">
        <h3>{{game.player.name}}</h3>
        <p>vs.</p>
        <h3>{{game.opponent.name}}</h3>
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
    <div class="row bg-light" v-else="game.over">
      <div class="col-12">
        <h2>GAME OVER!</h2>
        <h4>{{game.winner}} Wins!!</h4>
        <div class="col-12 newGame">
          <h1>
            <router-link :to="{name: 'home'}">Play Again!</router-link>
          </h1>
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
    data() {
      return {

      }
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      playerCardId() {
        return this.$store.state.playerCardId
      },
      opponentCardId() {
        return this.$store.state.opponentCardId
      }

    },
    mounted() {
      this.$store.dispatch('getGame', this.$route.params.gameId)
    },
    methods: {
      ready() {
        return this.playerCardId && this.opponentCardId
      },
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
</style>