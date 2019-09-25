<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>
<script>
// import '@/globalStyle/global.less'
import { mapMutations } from 'vuex';

export default {
  computed: {

  },
  created() {
    // 删除loading动画
    document.body.removeChild(document.getElementById('appLoading'));
    document.body.style.backgroundColor = '#fff';
    setTimeout(() => {
      document.getElementById('app').style.display = 'block';
    }, 500);
    // 监听窗口大小变化
    window.onresize = () => {
      this.updateState({
        contentHeight: document.documentElement.clientHeight - 136,
      });
    };
  },

  methods: {
    ...mapMutations(['updateState']),
  },
};
</script>

