import axios from "axios";

export const banners = {
  namespaced: true,
  state: {
    banners: [],
    totalItems: 0,
  },
  getters: {
    banners: state => state.banners,
    totalItems: state => state.totalItems,
  },
  mutations: {
    output (state, { items, total_items }) {
      state.banners = items;
      state.totalItems = total_items;
    }
  },
  actions: {
    async getBanners({ dispatch, commit }, page = 1, limit = 10) {
      const params = {
        offset: (page - 1) * limit,
        limit: limit,
      };
      const banners = await axios.get('/api/v2/admin/banners', { params });
      commit('output', banners.data);
    },
  },
}
