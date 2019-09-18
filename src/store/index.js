import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowHeight: document.documentElement.clientHeight, // 整体屏幕的高度
  },
  modules: {
    user,
  },
  mutations: {
    updateState: (state, payload) => {
      Object.assign(state, payload);
    },

  },
  actions: {

  },
});
