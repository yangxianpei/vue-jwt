import axios from 'axios'
import {getLocal} from './local'
import store from './../store'
class AjaxRequest{
    constructor(){
        this.baseURL=process.env.NODE_ENV=='production'?'/':'http://localhost:3000',
        this.timeout=3000,
        this.method='get',
        this.queue={}
    }
    //拦截器
    setInterceptor(instance){
      instance.interceptors.response.use((res)=>{
        store.commit('hideLodding')
          return res.data
      }),

      instance.interceptors.request.use((config)=>{
         //请求拦截一般设置 token
         store.commit('isshowLodding')
          config.headers.Authorization=getLocal('token')
          return config
      })
    }
    merge(options){//合并 公有数据和用户传来的数据

      return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    request(options){
        let instance = axios.create()
        this.setInterceptor(instance)
        let config=this.merge(options)
        return instance(config)
    }
}
export default  new AjaxRequest

