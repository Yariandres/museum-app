<template>
  <div class="view-container">
    <h1>Wildlife</h1>
    <div class="view-container__content">
      <MuseumHighlight
        v-for="highlight in displayWildlife"
        :key="highlight.id"
        :highlight="highlight"/>
    </div>
  </div>
</template>

<script>

import MuseumHighlight from '@/components/MuseumHighlight.vue';
import { orderBy } from 'lodash';

export default {
  name: 'WildlifeView',
  components: {
    MuseumHighlight,
  },
  data() {
    return {
      wildlife: [
        {
          id: 1,
          date: '2022-12-09 1:45:00',
          description: 'Zebras are equids – members of the horse family (Equidae) and are medium sized, odd-toed ungulates. Zebras are native to southern and central Africa. Although zebras are very adaptable animals as far as their habitats are concerned, most zebras live in grasslands and savannas.',
          name: 'Zebra',
          location: 'Autralia',
          species: 'Mammalia',
          endangered: true,
          image: 'https://loremflickr.com/640/360',
          quiz: 'https://planetquiz.space',
        },
        {
          id: 2,
          date: '2022-12-11 10:45:00',
          description: 'The Meerkat (suricate Suricata suricatta) is also called a ‘Suricate’. The Meerkat is a small member of the mongoose family whose range extends from South West Angola to South Africa. A group of meerkats is called a ‘mob’, but also referred to as a ‘gang’ or a ‘clan’. Meerkats are well known for their upright position and sociable behaviour.',
          name: 'Meerkat',
          location: 'Africa',
          species: 'Mammalia',
          endangered: false,
          image: 'https://loremflickr.com/640/360',
          news: {
            date: '2022-12-12 12:10:00',
            title: 'Weekly live conversations between various team members discussing',
          },
        },
      ],
    };
  },
  computed: {
    displayWildlife() {
      return orderBy(this.wildlife, ['date'], ['desc']);
    },
  },
};
</script>
