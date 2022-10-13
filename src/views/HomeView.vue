<template>
  <div class="view-container">
    <h1>Dinosaurs</h1>
    <div class="view-container__content">
      <MuseumHighlight
        v-for="highlight in displayDinos"
        :key="highlight.id"
        :highlight="highlight"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MuseumHighlight from '@/components/MuseumHighlight.vue';
import { orderBy } from 'lodash';

export default {
  name: 'HomeView',
  components: {
    MuseumHighlight,
  },
  data() {
    return {
      dinosaurs: [
        {
          id: 12,
          date: '2022-12-10 1:45:00',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum nemo laborum quis id impedit. Adipisci animi inventore quibusdam laudantium laboriosam quod vitae nemo similique possimus, at voluptas qui totam.',
          period: 'Jurassic (about 252 to 65 million years ago)',
          image: 'https://loremflickr.com/640/360',
          name: 't-Rex',
          quiz: 'https://planetquiz.space',
          news: {
            date: '2022-12-12 12:10:00',
            title: 'Weekly live conversations between various team members discussing',
          },
        },
        {
          id: 13,
          date: '2022-12-11 4:45:00',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum nemo laborum quis id impedit. Adipisci animi inventore quibusdam laudantium laboriosam quod vitae nemo similique possimus, at voluptas qui totam.',
          period: 'Early Triassic (252 – 247 million years ago)',
          image: 'https://loremflickr.com/640/360',
          name: 'Staurikosaurus',
          quiz: 'https://planetquiz.space',
          news: {
            date: '2022-12-12 12:10:00',
            title: 'Weekly live conversations between various team members discussing',
          },
        },
      ],
    };
  },
  computed: {
    displayDinos() {
      return orderBy(this.dinosaurs, ['date'], ['desc']);
    },
  },
};
</script>
