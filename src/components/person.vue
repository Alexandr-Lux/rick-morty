<template>
  <div class="card">
    <div class="card__photo">
      <img :src="photoURL" alt="" class="card__img">
    </div>
    <div class="card__content">
      <div class="card__header">
        <div class="card__name">
          {{name}}
          <router-link to="/character"/>
        </div>
        <div class="card__species">
          {{species}}
        </div>
      </div>
      <section class="card__episodes">
        <h2 class="episodes__title">Episodes</h2>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'person',
  data () {
    return {
      loading: false
    }
  },
  props: {
    name: String,
    photoURL: String,
    species: String
  }
}
</script>

<style lang="scss" scoped>
  .card {
    border: 1px solid #ddc;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 15px #887;
    display: flex;
    background-color: #eed;
  }

  .card__photo {
    overflow: hidden;
    margin-right: 10px;
    flex: 0 0 200px;
  }

  .card__img {
    width: 100%;
  }

  .card__content {
    flex: 1;
    padding: 10px;
  }

  .card__header {
    display: flex;
    justify-content: space-between;
  }

  .card__name {
    font-size: 24px;
    margin-bottom: 5px;
    cursor: pointer;
    transition: .2s;
    &:hover {
      color: #cc0000;
    }
  }

  .card__species {
    font-size: 18px;
    margin-left: 10px;
    padding-top: 5px;
  }

  .episodes__title {
    font-size: 16px;
  }

</style>
