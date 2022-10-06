<script>
export default {
  name: 'CatItem',
  props: ['cat'],
  watch: {
    cat() {
      this.$refs.image.classList.remove('loaded')
    }
  },
  methods: {
    imageLoaded() {
      this.$refs.image.classList.add('loaded')
    },
    voteCat() {
      this.$emit('vote-cat', this.cat.id)
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="image">
      <div class="d-flex justify-content-center image-loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <img
        :src="cat.url"
        class="card-img-top"
        :alt="cat.id"
        @load="imageLoaded"
        ref="image"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">Cat ID: {{ cat.id }}</h5>
      <p class="card-text">Another wonderful cat</p>
      <button
        type="button"
        class="btn btn-primary position-relative"
        @click="voteCat"
      >
        Vote for this cat
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {{ cat.likes ?? 0 }}
          <span class="visually-hidden">Likes</span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 18rem;
}
.image {
  width: 100%;
  min-height: 6rem;
  position: relative;
  background: #ccc;
}

.image > img {
  display: none;
}
.image > img.loaded {
  display: inline-block;
}

.image-loading {
  left: 9rem;
  top: 2rem;
  margin-left: -1rem;
  position: absolute;
}
</style>
