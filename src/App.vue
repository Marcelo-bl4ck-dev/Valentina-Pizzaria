<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import NavBar from './components/NavBar/NavBar.vue';
import Footer from './components/Footer/Footer.vue';
const el = ref()
const showNavbar = ref(true)
const lastScrollPosition = ref(0)


onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})



</script>

<template>
  <div class="app-container" id="app-window">
    <nav-bar class="navbar" :class="{ 'navbar--hidden': !showNavbar }"></nav-bar>
    <router-view class="app-content"></router-view>
    <Footer class="footer"></Footer>
  </div>
</template>

<style scoped>

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.app-container {
  overflow: scroll;
  position: fixed;
  top: 0;
  display: grid;
  width: 100%;
  height: 100%;
  background-color: white;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.nav-bar {
  height: 7em;
}
.app-content {
  margin-top: 6.8em;
}

.footer {
  display: grid;
}
@media (max-width: 800px) {
  .nav-bar {
    height: 7em;
  }
  .app-content {
    margin-top: 4em;
  }
}

</style>
