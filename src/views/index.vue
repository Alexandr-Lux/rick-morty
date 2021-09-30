<template>
  <div class="main-wrapper">
    <h1 class="main-title">Characters</h1>
    <main class="main-content">
      <ul class="person-cards" v-if="characters">
        <li class="person-item" v-for="item in characters" :key="item.id" >
          <person
            :name="item.name"
            :photoURL="item.image"
            :species="item.species"
            :episodes="item.episode"
            :identifier="item.id"
          />
        </li>
      </ul>
      <div class="loading">
        <loading />
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import person from '../components/person.vue'
import loading from '../components/loading.vue'

export default {
  data () {
    return {
      page: 2
    }
  },
  components: {
    person,
    loading
  },
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  },
  methods: {
    ...mapActions({
      getCharacters: 'getCharacters',
      addCharacters: 'addCharacters',
      getLastFiveEpisodes: 'fetchLastFiveEpisodes'
    }),
    loadMore () {
      const currentScroll = document.documentElement.scrollTop
      const documentHeight = document.documentElement.scrollHeight
      const screenHeight = document.documentElement.clientHeight

      if (documentHeight - screenHeight <= currentScroll) {
        setTimeout(async () => {
          await this.addCharacters(this.page)
          this.page++
        }, 500)
      }
    }
  },
  async created () {
    if (this.characters.length === 0) {
      await this.getCharacters()
    }

    window.addEventListener('scroll', this.loadMore)
  },
  unmounted () {
    window.removeEventListener('scroll', this.loadMore)
  }
}
</script>

<style lang="scss" scoped>

.btn {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #000;
  text-transform: uppercase;
}

.person-cards {
  margin: 0 -10px;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) and (max-width: 996px) {
    width: 80%;
    margin: 0 auto;
  }
}

.person-item {
  padding: 0 10px;
  margin-bottom: 20px;
  flex: 1 0 50%;
  @media (max-width: 996px) {
    flex-basis: 100%;
  }
  @media (max-width: 767px) {
    flex-basis: 50%;
  }
  @media (max-width: 479px) {
    flex-basis: 100%
  }
}

.loading {
  display: flex;
  justify-content: center;
}

</style>
