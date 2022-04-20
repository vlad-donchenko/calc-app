import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootStateI } from '@/types';
import calc from '@/store/calc/index';

Vue.use(Vuex);

const store: StoreOptions<RootStateI> = {
  state: {
    taskMessage: '',
    taskStackMessage: '',
  },
  modules: {
    calc,
  },
};

export default new Vuex.Store<RootStateI>(store);
