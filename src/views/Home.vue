<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>BATTLE CARDS</h1>
      </div>
    </div>
    <div class="row form-group justify-content-center">
      <form @submit.prevent="startGame">
        <label for="playerName">Please Enter Your Name</label><br>
        <input v-model="newGame.playerName" type="text" name="playerName" placeholder="Player Name"><br>
        <label for="deckChoice">Choose Deck: </label>
        <input v-model="newGame.set" type="number" min="1" max="4"><br>
        <button type="submit" class="btn btn-outline-secondary btn-lg btn-block">Play Game</button>
      </form>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    components: {
    },
    data() {
      return {
        newGame: {
          playerName: '',
          set: 1
        }
      }
    },
    methods: {
      startGame() {
        this.$store.dispatch('startGame', this.newGame)

      }
    },
    computed: {
      player() {
        return this.$store.state.game
      }
    }
  }
</script>