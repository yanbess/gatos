<script setup>
import CatsList from './components/cats-list/CatsList.vue'
</script>

<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <img
            class="logo me-2"
            role="img"
            aria-label="Super Cat Database"
            src="./assets/logo.svg"
          >
          <span class="fs-4">Super Cat Database</span>
        </a>
      </div>
    </div>
  </header>
  <CatsList />
</template>

<style scoped>
header {
  margin-bottom: 1.5rem;
}
header .logo {
  width: 2rem;
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(207deg) brightness(108%) contrast(103%);
}
</style>
