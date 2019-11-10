import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false
router.beforeEach(async (to,from,next)=>{
  let islogin = await store.dispatch('validata')
  let needValidata = to.matched.some(match => match.meta.validata)
  console.dir(to)
  if(needValidata){//此路由需要被校验
      if(islogin){ //已经登录
        next()
      }else{
        next('/login')
      }
  }else{//此路由不需要校验
    if(islogin && to.name=='login'){ //已经登录
      next('/')
    }else{
      next()
    }
  }
})
Vue.use(iView)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
