import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: [],
    attributes: []
  },
  getters: {
  },
  mutations: {
    setResults(state, data) {
      state.results = data;
    },
    setAttributes(state, data) {
      state.attributes = data;
    }
  },
  actions: {
    async getResultsAndAttributes({ commit }, data) {
      const res = await axios.post('/api/products', { ...data });
      commit('setResults', res.data.results);
      commit('setAttributes', res.data.attributes);
    }
  },
  modules: {
  }
});
