import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootStateI } from '@/types';

Vue.use(Vuex);

const store: StoreOptions<RootStateI> = {
  state: {
    resultList: [],
  },
  mutations: {
    SET_RESULT_ITEM(state, item) {
      state.resultList.push(item);
    },
  },
  getters: {
    getResultList: (state) => state.resultList,
  },
  actions: {
    addResultItem({ commit }, payload) {
      commit('SET_RESULT_ITEM', payload);
    },
  },
};

export default new Vuex.Store<RootStateI>(store);
