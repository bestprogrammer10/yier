<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
/**
 * App 根组件
 * 遵循 SOLID 原则：单一职责，仅负责根组件渲染
 */
export default {
  name: 'App'
}
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', Arial, sans-serif;
}

#app {
  height: 100vh;
}
</style>
