<template>
    <div>
      <div v-if="consoles">
        <CardComp v-for="console in consoles" :key="console.id">
          <template #header>{{ console.name }} </template>
          <div>Made By: {{ console.manufacturer }}</div>
          <div>Release Year: {{ console.release_year }}</div>
          <div>Storage: {{ console.storage }}</div>
          <div>Price: R {{ console.price }}</div>
          <template #footer>Best Seller: {{ console.best_selling_game }}</template>
        </CardComp>
      </div>
      <div v-else class="spinner">Loading... It will be done soon... Please</div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import CardComp from '@/components/CardComp.vue';
  
  export default {
    name: 'ConsolesView',
    components: { CardComp },
    computed: {
      ...mapState(['consoles']),
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
  }
  </style>
  