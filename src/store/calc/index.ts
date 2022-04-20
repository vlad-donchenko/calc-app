import {
  ActionTree, GetterTree, Module, MutationTree,
} from 'vuex';
import {
  CalcI, RootStateI, ProductI, CalcMutation,
} from '@/types';
import { getCachedProducts, setProductOnCache } from '@/utils';

const namespaced = true;

const state: CalcI = {
  productList: getCachedProducts(),
};

const mutations: MutationTree<CalcI> = {
  [CalcMutation.SET_PRODUCT_ITEM](state, payload: ProductI) {
    state.productList.push(payload);
    setProductOnCache(state.productList);
  },
  [CalcMutation.DELETE_PRODUCT_ITEM](state, payload: number) {
    state.productList.splice(payload, 1);
    setProductOnCache(state.productList);
  },
};

const getters: GetterTree<CalcI, RootStateI> = {
  getProductList: (state): Array<ProductI> => state.productList,
};

const actions: ActionTree<CalcI, RootStateI> = {
  addNewProduct({ commit }, payload: ProductI) {
    commit(CalcMutation.SET_PRODUCT_ITEM, payload);
  },
  removeProduct({ commit }, payload: number) {
    commit(CalcMutation.DELETE_PRODUCT_ITEM, payload);
  },
};

const Calc: Module<CalcI, RootStateI> = {
  state,
  getters,
  mutations,
  actions,
  namespaced,
};

export default Calc;
