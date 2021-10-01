<template>
  <div class="card">
    <div class="card__photo">
      <img :src="hero.image" alt="" class="card__img">
    </div>
    <div class="card__content">
      <div class="card__header">
        <div class="card__name" @click="$router.push({
          name: 'character',
          params: {
            id: hero.id
          }
        })">
          {{hero.name}}
        </div>
        <div class="card__species">
          {{hero.species}}
        </div>
      </div>
      <section class="card__episodes episodes">
        <h2 class="episodes__title">Last 5 episodes</h2>
        <ul class="episodes__list" v-if="lastFiveEpisodes">
          <li class="episodes__item" v-for="episode in lastFiveEpisodes" :key="episode.id" @click="$router.push({
            name: 'episode',
            params: {
              id: episode.id
            }
        })">
            {{episode.name}}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'person',
  data () {
    return {
      lastFiveEpisodes: null
    }
  },
  props: {
    hero: Object,
    isFilter: Boolean
  },
  methods: {
    ...mapActions(['fetchLastFiveEpisodes'])
  },
  async created () {
    this.lastFiveEpisodes = this.hero.lastFiveEpisodes
    if (this.hero.lastFiveEpisodes.length === 0) {
      await this.fetchLastFiveEpisodes({
        episodes: this.hero.episode,
        id: this.hero.id,
        isFilter: this.isFilter
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 15px #887;
    display: flex;
    background-color: #eed;
    height: 200px;
    @media (max-width: 767px) {
      flex-direction: column;
      height: 100%;
    }
  }

  .card__photo {
    flex: 0 0 200px;
    @media (max-width: 767px) {
      flex: 1 1 60%;
    }
  }

  .card__img {
    width: 100%;
    height: 100%;
  }

  .card__content {
    flex: 1;
    padding: 10px;
    @media (max-width: 767px) {
      flex: 1 0 250px;
    }
  }

  .card__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    border-width: 0;
    border-style: solid;
    border-bottom-width: 1px;
    border-image: linear-gradient(to left, rgba(0,0,0,0), rgba(77,77,77,1), rgba(0,0,0,0)) 1;
  }

  .card__name {
    font-size: 24px;
    transition: .2s;
    cursor: pointer;
    &:hover {
      color: #07c5bb;
    }
  }

  .card__species {
    font-size: 18px;
    margin-left: 10px;
    padding-top: 5px;
  }

  .episodes__title {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .episodes__item {
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
      color: #07c5bb;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
