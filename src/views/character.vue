<template>
  <div class="main-wrapper">
    <div class="loading" v-if="loading">
      <loading />
    </div>
    <div class="character" v-else>
      <div class="header">
        <h1 class="main-title" v-if="hero">{{hero.name}}</h1>
        <div class="home" @click="$router.push({ name: 'index' })">Home</div>
      </div>
      <main class="main-content" v-if="hero">
        <div class="avatar">
          <img :src="hero.image" alt="">
        </div>
        <div class="info">
          <div class="info__text">Species</div>
          <div class="info__value">{{hero.species}}</div>
          <div class="info__text">Status</div>
          <div class="info__value">{{hero.status}}</div>
          <div class="info__text">Location</div>
          <div class="info__value">{{hero.location.name}}</div>
        </div>
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
      hero: null,
      loading: false
    }
  },
  components: {
    loading
  },
  methods: {
    ...mapActions(['fetchHeroInfoById'])
  },
  async created () {
    this.loading = true
    this.hero = await this.fetchHeroInfoById(this.$route.params.id)
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    display: flex;
    align-items: center;
  }
  .avatar {
    margin-right: 15px;
    border-radius: 20px;
    overflow: hidden;
  }
  .info__text {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .info__value {
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 20px;
  }
</style>
