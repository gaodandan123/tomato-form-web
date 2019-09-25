import Vue from 'vue';
import iView from 'iview';
import lodash from 'lodash';
import Moment from 'moment';
// 自定义主题
import './ctmsTheme/dist/iview.css';
import App from './App.vue';
import router from './router';
import store from './store/index';
// 验证规则可在 rules.js文件添加
import rules from '@/utils/rules';
import '@/assets/style/global.less';

Vue.config.productionTip = false;
Vue.prototype.$rules = rules;
Vue.prototype._ = lodash;
Vue.prototype.$Moment = Moment;
Vue.use(iView);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
