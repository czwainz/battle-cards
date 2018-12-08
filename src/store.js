import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let battlecardsapi = axios.create({
  baseURL: "https://battlecardz.herokuapp.com/api/games"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {},
    playerCardId: '',
    opponentCardId: ''
  },
  mutations: {
    setGame(state, game) {
      state.game = game
    },
    setActivePlayer(state, card) {
      state.playerCardId = card.id
    },
    setActiveOpponent(state, card) {
      state.opponentCardId = card.id
    }
  },
  actions: {
    startGame({ commit }, newGame) {
      battlecardsapi.post('', newGame)
        .then(res => {
          console.log('gameInfo', res.data.game)
          commit('setGame', res.data.game)
          router.push({ name: 'game', params: { gameId: res.data.game.id } })
        })
    },
    getGame({ commit, dispatch }, gameId) {
      battlecardsapi.get('/' + gameId)
        .then(res => {
          console.log('game', res.data.data)
          commit('setGame', res.data.data)
        })
    },
    setActivePlayer({ commit }, card) {
      commit('setActivePlayer', card)
    },
    setActiveOpponent({ commit }, card) {
      commit('setActiveOpponent', card)
    },
    attack({ commit }, payload) {
      battlecardsapi.put(payload.gameId, payload.attackObject)
        .then(res => {
          console.log(res)
          commit('setGame', res.data.game)
        })
    }

  }
})
