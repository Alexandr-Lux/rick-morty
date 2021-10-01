import { createStore } from 'vuex'
import axios from 'axios'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state: {
    characters: [],
    filtered: []
  },
  getters: {
    getCharacters: (state) => state.characters,
    getFiltered: (state) => state.filtered
  },
  mutations: {
    SET_CHARACTERS (state, payload) {
      state.characters = state.characters.concat(payload.results.map(item => {
        item.lastFiveEpisodes = []
        return item
      }))
    },
    SET_FILTERED (state, payload) {
      state.filtered = state.filtered.concat(payload.results.map(item => {
        item.lastFiveEpisodes = []
        return item
      }))
    },
    PUT_INTO_CHARACTERS (state, payload) {
      state.characters.map(item => {
        if (payload.heroID === item.id) {
          item.lastFiveEpisodes.push(payload)
        }
        return item
      })
    },
    PUT_INTO_FILTERED (state, payload) {
      state.filtered.map(item => {
        if (payload.heroID === item.id) {
          item.lastFiveEpisodes.push(payload)
        }
        return item
      })
    },
    CLEAR_FILTERED (state) {
      state.filtered = []
    }
  },
  actions: {
    async fetchCharacters ({ commit }, { page, input, select }) {
      if (input !== '' || select !== '') {
        try {
          const { data } = await axios(`https://rickandmortyapi.com/api/character/?page=${page}&name=${input}&status=${select}`)
          commit('SET_FILTERED', data)
        } catch (error) {
          console.log(error)
        }
      } else {
        try {
          const { data } = await axios(`https://rickandmortyapi.com/api/character/?page=${page}`)
          commit('SET_CHARACTERS', data)
        } catch (error) {
          console.log(error)
        }
      }
    },
    async fetchLastFiveEpisodes ({ commit }, { episodes, id, isFilter }) {
      try {
        const lastFiveURL = episodes.slice(-5)
        await lastFiveURL.forEach(async url => {
          const { data } = await axios.get(url)
          if (isFilter) {
            commit('PUT_INTO_FILTERED', { name: data.name, heroID: id, id: data.id })
          } else {
            commit('PUT_INTO_CHARACTERS', { name: data.name, heroID: id, id: data.id })
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    async fetchHeroInfoByUrl (ctx, url) {
      try {
        const { data } = await axios(url)
        return data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchHeroInfoById (ctx, id) {
      try {
        const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        return data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchEpisodeInfo (ctx, id) {
      try {
        const { data } = await axios(`https://rickandmortyapi.com/api/episode/${id}`)
        return data
      } catch (error) {
        console.log(error)
      }
    }
  },
  plugins: [vuexLocal.plugin]
})
