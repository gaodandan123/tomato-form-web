import request from '@/utils/request';

export default {
  // 登录
  login: data => request('/auth/login', { method: 'post', body: data }),
  // 退出登录
  loginOut: data => request('/auth/loginOut', { method: 'post', body: data }),
};
