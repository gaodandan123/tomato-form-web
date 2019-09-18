import api from '@/api/user';
import { Message } from 'iview';

const { login, loginOut } = api;
const user = {
  namespaced: true,
  state: {
    token: '',
  },
  mutations: {
    updateState(state, payload) {
      Object.assign(state, payload);
    },
  },
  actions: {
    // 登录
    async login({ commit }, userInfo) {
      const res = await login(userInfo);
      if (res) {
        Message.success('登录成功!');
        commit('updateState', {
          token: res.data,
        });
        return true;
      }
      return false;
    },
    // 退出登录
    async logout() {
      const res = await loginOut();
      if (res) {
        Message.success('退出登录成功!');
      }
    },

  },
};
export default user;
