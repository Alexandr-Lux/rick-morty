<template>
  <div class="main-wrapper">
    <header class="header">
      <h1 class="main-title">Characters</h1>
      <div class="form">
        <form class="input" @submit.prevent="setFilter()">
          <input class="input__name" type="text" placeholder="name" v-model="inputArea">
          <select name="status" class="status" v-model="selectConfig">
            <option class="select__item" value="" selected>All</option>
            <option class="select__item" value="alive">Alive</option>
            <option class="select__item" value="dead">Dead</option>
            <option class="select__item" value="unknown">Unknown</option>
          </select>
          <button class="form-btn">Filter</button>
        </form>
        <button class="form-btn reset" @click="removeFilter()">Reset</button>
      </div>
    </header>
    <main class="main-content">
      <ul class="person-cards">
        <li class="person-item" v-for="item in characters" :key="item.id" >
          <person :hero="item" :isFilter="isFilter" />
        </li>
      </ul>
      <div class="loading" v-if="loading">
        <loading />
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import person from '../components/person.vue'
import loading from '../components/loading.vue'

export default {
  data () {
    return {
      page: 1,
      filterPage: 1,
      loading: false,
      inputArea: '',
      selectConfig: '',
      characters: [],
      isFilter: false
    }
  },
  components: {
    person,
    loading
  },
  computed: {
    ...mapGetters(['getCharacters', 'getFiltered'])
  },
  methods: {
    ...mapActions(['fetchCharacters', 'fetchFiltered']),
    ...mapMutations(['CLEAR_FILTERED']),
    async setFilter () {
      if (this.inputArea !== '' || this.selectConfig !== '') {
        this.isFilter = true
        this.filterPage = 1
        await this.fetchCharacters({
          page: this.filterPage,
          input: this.inputArea,
          select: this.selectConfig
        })
        this.characters = this.getFiltered
        this.loading = false
      }
    },
    removeFilter () {
      this.isFilter = false
      this.inputArea = ''
      this.selectConfig = ''
      this.characters = this.getCharacters
      this.filterPage = 1
      this.CLEAR_FILTERED()
    },
    async loadMore () {
      const currentScroll = document.documentElement.scrollTop
      const documentHeight = document.documentElement.scrollHeight
      const screenHeight = document.documentElement.clientHeight

      if (documentHeight - screenHeight <= currentScroll) {
        this.loading = true
        if (this.isFilter) {
          ++this.filterPage
          await this.fetchCharacters({
            page: this.filterPage,
            input: this.inputArea,
            select: this.selectConfig
          })
          this.characters = this.getFiltered
        } else {
          ++this.page
          await this.fetchCharacters({
            page: this.page,
            input: this.inputArea,
            select: this.selectConfig
          })
          this.characters = this.getCharacters
        }
      }
    }
  },
  async created () {
    this.characters = this.getCharacters
    this.CLEAR_FILTERED()
    if (this.characters.length === 0) {
      this.loading = true
      await this.fetchCharacters({
        page: this.page,
        input: this.inputArea,
        select: this.selectConfig
      })
      this.characters = this.getCharacters
    }

    window.addEventListener('scroll', this.loadMore)
  },
  unmounted () {
    window.removeEventListener('scroll', this.loadMore)
  }
}
</script>

<style lang="scss" scoped>

.input__name {
  border: 1px solid #ccc;
  border-right: none;
  height: 30px;
  width: 130px;
  padding: 0 5px;
  border-radius: 5px 0 0 5px;
  &:placeholder {
    color: #aaa;
  }
}

.form {
  display: flex;
}

.form-btn {
  padding: 0 15px;
  height: 30px;
  text-transform: uppercase;
  background: linear-gradient(to top, #e4d59b, #eed);
  color: #777;
  &:hover {
    background: linear-gradient(to bottom, #e4d59b, #eed);
  }
  &.reset {
    border-radius: 0 5px 5px 0;
    border-left: 1px solid #fff
  }
}

.status {
  height: 30px;
  width: 100px;
  font-family: 'Pangolin', sans-serif;
  border: 1px solid #ccc;
  text-transform: uppercase;
  color: #777;
}

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

</style>
