import { createStore } from 'vuex'

export default createStore({
  state: {
    friends: null,
    cars: null,
    consoles: null,
  },
  mutations: {  
    setFriends(state, payload) {
      state.friends = payload;
    },
    setCars(state, payload) {
      state.cars = payload;
    },
    setConsoles(state, payload) {
      state.consoles = payload;
    },
  },
  actions: {
    async getData({ commit }) {
      let fetchedInfo = await fetch('https://oyintanda-zongwana.github.io/Exercise_api/data/');
      let data = await fetchedInfo.json();
      let { friends, cars, gaming_consoles } = data;
      commit('setFriends', friends);
      commit('setCars', cars);
      commit('setConsoles', gaming_consoles);
    },
  },
  modules: {}
});
