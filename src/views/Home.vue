<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 justify-content-between">
        <h1 class="text-teal"><strong>BATTLE CARDS</strong></h1>
        <i class="far fa-sun fa-3x a mr-3"></i>
        <i class="far fa-sun fa-5x text-primary mr-3"></i>
        <i class="far fa-sun fa-3x a"></i>
      </div>
    </div>
    <div class="row form-group justify-content-center">
      <form @submit.prevent="startGame">
        <label for="playerName" class="playGame">Please Enter Your Name</label><br>
        <input v-model="newGame.playerName" type="text" name="playerName" placeholder="Player Name" class="playerName"><br>
        <label for="btn-group" class="playGame mt-2">Choose Deck </label>
        <br>
        <div class="btn-group-lg" role="group">
          <button type="button" class="btn btn-danger" v-model="newGame.set">1</button>
          <button type="button" class="btn btn-warning" v-model="newGame.set">2</button>
          <button type="button" class="btn btn-success" v-model="newGame.set">3</button>
          <button type="button" class="btn btn-info" v-model="newGame.set">4</button>
        </div>
        <button type="submit" class="btn btn-primary btn-lg btn-block mt-3">TIME FOR BATTLE</button>
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
<style>
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

  .playGame {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
  }

  h1 {
    color: var(--teal);
    font-family: 'Fredoka One', cursive;
    text-shadow: 2px 2px 5px var(--blue);
    font-size: 60px;
  }

  body {
    background-color: rgb(109, 111, 103);
  }
</style>