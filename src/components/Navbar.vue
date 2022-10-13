<template>
  <header class="header-navigation" aria-label="has navigation links" >
    <span class="header-navigation__icon">&#128506;</span>
    <h1 class="header-navigation__title">{{ msg }}</h1>
    <span class="header-navigation__badge"> {{ displayBadge }}</span>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String,
    currentPage: String,
  },
  computed: {
    displayBadge() {
      switch (this.currentPage) {
        case 'home':
          return '🦕';
        case 'space':
          return '🚀';
        case 'ocean':
          return '🌊';
        case 'wildlife':
          return '🦁';
        default:
          return this.currentPage;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header-navigation {
    background-color: #f5f5f5;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__icon {
      font-size: 2.5rem;
      margin-right: 1rem;
    }

    &__badge {
      font-size: 2.5rem;
      font-weight: 300;
      margin-left: 1rem;
    }

    &__title {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
</style>
