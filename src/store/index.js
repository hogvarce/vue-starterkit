export default {
  state: {
    count: 0,
  },
  getters: {

  },
  actions: {
    increment ({ commit }) {
      commit('increment');
    },
  },
  mutations: {
    increment (state) {
      state.count++;
    },
  },
};
