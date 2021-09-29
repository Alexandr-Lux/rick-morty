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
  actions: {
    async getCharacters (ctx) {
      try {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character')
        ctx.commit('SET_CHARACTERS', data)
      } catch (error) {
        console.log(error)
      }
    },
    async addCharacters (ctx, page) {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        console.log(data)
        ctx.commit('ADD_CHARACTERS', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
