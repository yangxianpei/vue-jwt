<template>
  <div id="app">
    <Spin fix v-if="$store.state.isshow">加载中。。</Spin>
    <div id="nav">
      <router-link to="/">首页</router-link> |
        <router-link to="/Login">登录</router-link> |
      <router-link to="/about">个人中心</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  font-size 20px
</style>


