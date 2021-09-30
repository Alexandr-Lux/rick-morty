import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    characters: []
  },
  mutations: {
    SET_CHARACTERS (state, payload) {
      state.characters = payload.results
    },
    ADD_CHARACTERS (state, payload) {
      state.characters = state.characters.concat(payload.results)
    }
  },
  getters: {
    getHeroInfo: (state) => (id) => state.characters.find((item) => item.id === id)
  },
  actions: {
    async getCharacters (ctx) {
      try {
        const { data } = await axios('https://rickandmortyapi.com/api/character')
        ctx.commit('SET_CHARACTERS', data)
      } catch (error) {
        console.log(error)
      }
    },
    async addCharacters (ctx, page) {
      try {
        const { data } = await axios(`https://rickandmortyapi.com/api/character/?page=${page}`)
        ctx.commit('ADD_CHARACTERS', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
