<script>
export default {
  name: 'CatsItemsList',
  props: ['cats'],
  data() {
    return {
      selectedCatId: null
    }
  },
  watch: {
    // whenever question changes, this function will run
    /* cats(newQuestion, oldQuestion) {
      //this.cats = newQuestion
      console.log(this.cats, 222)
    } */
  },
  created() {
    // props are exposed on `this`
    //console.log(this.cats, 11)
  },
  methods: {
    selectCat(cat) {
      this.selectedCatId = cat.id
      this.$emit('select-cat', cat)
    }
  }
}
</script>

<template>
  <ul class="list-group">
    <li
      class="list-group-item list-group-item-action"
      :class="[selectedCatId === cat.id ? 'active' : '']"
      aria-current="true"
      v-for="cat in cats"
      :key="cat.id"
      @click="() => selectCat(cat)"
    >
      {{ cat.id }}
    </li>
  </ul>
</template>
