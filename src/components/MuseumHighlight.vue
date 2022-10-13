<template>
  <article class="museum-highlight">
    <figure class="museum-highlight__image">
      <span v-if="highlight.partner">&#128640;</span>
      <img :src="highlight.image ? highlight.image : 'https://loremflickr.com/640/360'
" :alt="highlight.title" />
    </figure>
    <div class="museum-highlight__content">
      <h2 class="museum-highlight__title">{{ highlight.title }}</h2>
      <p class="museum-highlight__description">{{ highlight.description }}</p>

      <p class="museum-highlight__date">{{ highlight.date }}</p>

      <p v-if="highlight.name">
        <span class="museum-highlight__name">Name:</span>
        {{ highlight.name }}
      </p>

      <p v-if="highlight.location">
        <span class="museum-highlight__location-title">Location:</span>
        {{ highlight.location }}
      </p>

      <p v-if="highlight.species">
        <span class="museum-highlight__species-title">Species:</span>
        {{ highlight.species }}
      </p>

      <p v-if="highlight.endangered">
        <span class="museum-highlight__species-title">Endangered:</span>
        {{ highlight.endangered && '&#10071;' }}
      </p>

      <p v-if="highlight.period">
        <span class="museum-highlight__period">Period:</span>
        {{ highlight.period }}
      </p>

      <p v-if="highlight.news">
        <span class="museum-highlight__news">News:</span>
        {{ highlight.news.title }}
        {{ highlight.news.date }}
      </p>

      <p class="museum-highlight__quiz" v-if="highlight.quiz">
        <a :href="highlight.quiz" target="_blank" rel="noopener noreferrer">Take the quiz?</a>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'MuseumHighlight',
  components: {},
  mixins: [],
  props: {
    highlight: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
  .museum-highlight {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    border: 1px solid #f5f5f5;
    border-radius: 0.5rem;

    &__image {
      width: 20%;
      height: auto;
      overflow: hidden;
      border-radius: 1rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__content {
      width: 50%;
      padding: 0 2rem;
    }

    &__title {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 1rem;
    }

    &__description {
      font-size: 1.1rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    &__date {
      font-size: 1rem;
      font-weight: 300;
    }

    &__quiz {
      font-size: 1.5rem;
      font-weight: 300;
      margin-top: 1rem;
    }

    &__name{
      font-size: 1.2rem;
      font-weight: 800;
      margin-top: 1rem;
    }

    &__location-title {
      font-size: 1.2rem;
      font-weight: 800;
      margin-top: 1rem;
    }

    &__species-title {
      font-size: 1.2rem;
      font-weight: 800;
      margin-top: 1rem;
    }

    &__period {
      font-size: 1.2rem;
      font-weight: 800;
      margin-top: 1rem;
    }

    &__news {
      font-size: 1.2rem;
      font-weight: 800;
      margin-top: 1rem;
    }
  }
</style>
