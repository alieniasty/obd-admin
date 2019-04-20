<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
    };
  },
  methods: {
    login() {},
    async logout() {}
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  height: 100%;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.el-aside {
  background: #545c64;
  color: white;
  min-height: 100vh;
}

.logo-container {
  padding: 22px;
  background: #434a50;
  text-align: center;
}

aside > ul > span > li > span {
  padding-left: 10px;
}

.el-menu {
  border-right: 0 !important;
}

.el-main {
  background: #eef1f4;
}
</style>