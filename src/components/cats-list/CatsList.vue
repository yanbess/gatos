<script>
import CatsItemsList from './parts/CatsItemsList.vue'
import CatItem from './parts/CatItem.vue'

import Cats from '../../resources/Cats'

const catsLimit = 20

export default {
  name: 'CatsList',
  components: {
    CatsItemsList,
    CatItem
  },
  data() {
    return {
      cats: [],
      selectedCat: null,
      error: false
    }
  },
  mounted() {
    this.getCatList()
  },
  methods: {
    async getCatList() {
      const cats = new Cats()
      const result = await cats.getList(catsLimit)

      result.isSuccess()
        ? (this.cats = result.getResult())
        : (this.error = true)
    },
    selectCat(cat) {
      this.selectedCat = cat
    },
    voteCat(catId) {
      let objIndex = this.cats.findIndex((obj) => obj.id == catId)
      if (this.cats[objIndex].likes === undefined) {
        this.cats[objIndex].likes = 1
      } else {
        this.cats[objIndex].likes++
      }
    }
  }
}
</script>

<template>
  <template v-if="cats.length">
    <div class="container-lg">
      <div class="row">
        <div class="col-4">
          <CatsItemsList :cats="cats" @select-cat="selectCat" />
        </div>
        <div class="col-8">
          <CatItem v-if="selectedCat" :cat="selectedCat" @vote-cat="voteCat" />
          <template v-else>
            <div class="empty-cat">
              <img class="logo" src="./../../assets/logo.svg" />
              <div class="fs-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                Choose your cat
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </template>
  <template v-else-if="error">
    <div class="alert alert-danger text-center" role="alert">
      Something went wrong... :(
    </div>
  </template>
  <template v-else>
    <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </template>
</template>

<style scoped>
.logo {
  max-width: 12rem;
  filter: invert(99%) sepia(0%) saturate(646%) hue-rotate(51deg)
    brightness(116%) contrast(73%);
}
.fs-4 {
  color: #ccc;
}
.empty-cat {
  text-align: center;
}
</style>
