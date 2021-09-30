<template>
  <div class="card">
    <div class="card__photo">
      <img :src="photoURL" alt="" class="card__img">
    </div>
    <div class="card__content">
      <div class="card__header">
        <div class="card__name" @click="$router.push({
          name: 'character',
          params: {
            id: identifier
          }
        })">
          {{name}}
        </div>
        <div class="card__species">
          {{species}}
        </div>
      </div>
      <section class="card__episodes episodes">
        <h2 class="episodes__title">Last 5 episodes</h2>
        <ul class="episodes__list" v-if="lastFiveEpisodes.length !== 0">
          <li class="episodes__item" v-for="episode in lastFiveEpisodes" :key="episode.name">
            <router-link to="character">
              {{episode.name}}
            </router-link>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'person',
  data () {
    return {
      loading: false,
      lastFiveEpisodes: []
    }
  },
  props: {
    name: String,
    photoURL: String,
    species: String,
    episodes: Array,
    identifier: Number
  },
  methods: {
    fetchLastFiveEpisodes (array) {
      const lastFiveURL = array.slice(-5)
      lastFiveURL.forEach(async url => {
        const { data } = await axios.get(url)
        this.lastFiveEpisodes.push({ name: data.name, url })
      })
    }
  },
  created () {
    this.fetchLastFiveEpisodes(this.episodes)
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
  }

  .card__name {
    font-size: 24px;
    margin-bottom: 5px;
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
    &:hover {
      color: #07c5bb;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
