<template>
  <NavBar msg="Natural History Museum" :currentPage="currentPage"/>
  <nav>
    <router-link to="/">Dinosaurs</router-link> |
    <router-link to="/space">Space</router-link> |
    <router-link to="/ocean">Oceans</router-link> |
    <router-link to="/wildlife">Wildlife</router-link>
  </nav>
  <router-view/>
</template>

<script>
import NavBar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  computed: {
    // todo: potencial mixing/helper
    currentPage() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
