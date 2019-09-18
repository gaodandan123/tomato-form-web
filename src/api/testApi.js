import request from '@/utils/request';
// 登录
export default {
  testApi: () => request('/api/news', { method: 'get' }),
};
