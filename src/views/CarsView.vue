<template>
    <div>
      <div v-if="cars">
        <CardComp v-for="car in cars" :key="car.id">
          <template #header>{{ car.make }} {{ car.model }}</template>
          <div>Year: {{ car.year }}</div>
          <div>Price: ${{ car.price }}</div>
          <template #footer>Contact: {{ car.contact }}</template>
        </CardComp>
      </div>
      <div v-else class="spinner">Loading...</div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import CardComp from '@/components/CardComp.vue';
  
  export default {
    name: 'CarsView',
    components: { CardComp },
    computed: {
      ...mapState(['cars']),
    },
    created() {
      this.$store.dispatch('getData');
    },
  };
  </script>
  
  <style>
  .spinner {
    text-align: center;
    font-size: 24px;
  };
  </style>
  