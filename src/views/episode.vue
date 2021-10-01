<template>
  <div class="main-wrapper">
    <div class="loading" v-if="loading">
      <loading />
    </div>
    <div class="episode" v-else>
      <div class="header">
        <h1 class="main-title" v-if="episode">Hero list</h1>
        <div class="home" @click="$router.push({ name: 'index' })">Home</div>
      </div>
      <main class="main-content" v-if="episode">
        <div class="hero__list">{{episode.name}}</div>
        <div class="text">Released {{episode.air_date}}</div>
        <ul class="ep-heroes">
          <li class="ep-hero" v-for="hero in heros" :key="hero.id" @click="$router.push({
            name: 'character',
            params: {
              id: hero.id
            }
          })">
            <div class="hero__photo">
              <img :src="hero.image" alt="" class="hero__img">
            </div>
            <div class="hero__name">
              {{hero.name}}
            </div>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import loading from '../components/loading.vue'

export default {
  data () {
    return {
      episode: null,
      loading: false,
      heros: []
    }
  },
  components: {
    loading
  },
  methods: {
    ...mapActions(['fetchEpisodeInfo', 'fetchHeroInfoByUrl'])
  },
  async created () {
    this.loading = true
    this.episode = await this.fetchEpisodeInfo(this.$route.params.id)
    if (this.heros.length === 0) {
      for (const url of this.episode.characters) {
        this.heros.push(await this.fetchHeroInfoByUrl(url))
      }
    }
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
  .text {
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
  }
  .hero__list {
    font-size: 22px;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 7px;
  }
  .ep-heroes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .ep-hero {
    margin: 15px;
    flex: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
  .hero__name {
    font-size: 18px;
    flex: 1;
  }
  .hero__photo {
    width: 150px;
    height: 150px;
    margin-bottom: 5px;
  }
  .hero__img {
    width: 100%;
    height: 100%;
  }
</style>
