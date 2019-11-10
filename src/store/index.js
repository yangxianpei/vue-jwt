import Vue from 'vue'
import Vuex from 'vuex'
import {getLogin,validata} from './../api/api'
import {setLocal} from './../bin/local'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'',
    isshow:false
  },
  mutations: {
    setName(state,username){
      state.username=username
    },
    isshowLodding(state){
      state.isshow=true
    },
    hideLodding(state){
      state.isshow=false
    }
  },
  actions: {
    async setName({commit},username){
        let res = await getLogin(username)
        if(res.code==0){
          commit('setName',res.username)
          setLocal('token',res.token)
          return 0
        }else{
          return Promise.reject(res.data)
        }
    },
    async validata({commit}){
      let res= await validata()
      if(res.code==0){
        commit('setName',res.username)
        setLocal('token',res.token)
      }
      return res.code===0
    }
  },
  modules: {
  }
})
