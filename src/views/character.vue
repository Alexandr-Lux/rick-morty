<template>
  <div class="main-wrapper">
    <h1 class="main-title" v-if="hero">{{hero.name}}</h1>
    <main class="main-content">
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      hero: null
    }
  },
  computed: {
    ...mapGetters(['getHeroInfo'])
  },
  created () {
    this.hero = this.getHeroInfo(+this.$route.params.id)
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
