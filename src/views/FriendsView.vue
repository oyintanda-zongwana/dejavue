<template>
  <div>
    <div v-if="friends">
      <CardComp v-for="friend in friends" :key="friend.id" :style="{ borderColor: friend.gender === 'male' ? 'gold' : 'green' }">
        <template #header>
          fullName: {{ friend.firstName }} {{ friend.lastName }}<br>
          Gender: {{ friend.gender }}<br>
          Profile: {{ friend.profile }}
        </template>
        <div>Contact: {{ friend.contactDetails }}</div>
      </CardComp>
    </div>
    <div v-else class="spinner">Loading...</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardComp from '@/components/CardComp.vue';

export default {
  name: 'FriendsView',
  components: { CardComp },
  computed: {
    ...mapState(['friends']),
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
