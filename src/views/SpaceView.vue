<template>
  <div class="view-container">
    <h1>Space</h1>
    <div class="view-container__content">
      <MuseumHighlight
        v-for="highlight in displaySpace"
        :key="highlight.id"
        :highlight="highlight"/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import MuseumHighlight from '@/components/MuseumHighlight.vue';
import { orderBy } from 'lodash';

export default {
  name: 'SpaceView',
  components: {
    MuseumHighlight,
  },
  mixins: [],
  data() {
    return {
      spaceHighlights: [
        {
          date: '2020-04-20 12:20:00',
          description: 'Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.',
          id: 1,
          image: 'http://picsum.photos/id/1019/300/300',
          name: 'Asteroids',
        },
        {
          date: '2020-05-20 15:50:00',
          description: 'A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.',
          id: 9,
          image: 'http://picsum.photos/id/1002/300/300',
          name: 'Comets',
        },
        {
          date: '2020-05-01 9:22:00',
          description: 'The term planet is ancient, with ties to history, astrology, science, mythology, and religion.',
          id: 7,
          image: '',
          name: 'Planets',
          news: {
            date: '2020-08-18 18:00:00',
            title: 'Attend our talk about Jupiter with Dr. Hogarth',
          },
          quiz: 'https://planetquiz.space',
        },
        {
          date: '2020-07-05 4:10:00',
          description: 'A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.',
          id: 12,
          image: 'http://picsum.photos/id/1000/300/300',
          name: 'Meteor showers',
          news: {
            title: 'The Lyrids will peak at on April 21-22 2021, at night',
          },
        },
      ],
      spacePartners: {
        observatory: {
          createdAt: '2020-06-01 11:45:00',
          info: 'The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.',
          image: '',
          name: 'Mauna Kea Observatories',
          id: 33,
        },
      },
      newArr: [],
    };
  },
  computed: {
    displaySpace() {
      // loop through the spacePartners object
      for (const key of Object.keys(this.spacePartners)) {
        // create partner object to the newArray
        const partnerObject = {
          date: this.spacePartners[key].createdAt,
          description: this.spacePartners[key].info,
          id: this.spacePartners[key].id,
          image: this.spacePartners[key].image,
          name: this.spacePartners[key].name,
          partner: true,
        };
        this.newArr = [...this.newArr, partnerObject];
      }
      // return newArray with spacePartners and spaceHighlights sorted
      return orderBy([...this.newArr, ...this.spaceHighlights], ['date'], ['desc']);
    },
  },
};
</script>

<style lang="scss">
  .view-container {
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 0.5rem;
    margin-bottom: 1rem;

    &__content {
      padding: 1rem;
      background-color: #fff;
      border-radius: 0.5rem;
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
