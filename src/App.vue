<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
