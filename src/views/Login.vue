<template>
  <div>
     <Input placeholder="输入用户名..." style="width: 300px" v-model="username" />
     <Button type="primary" @click="btn">登录</Button>
  </div>
</template>


<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return{
        username:''
    }
  },
  methods:{
    ...mapActions(["setName"]),
    async btn(){
      
        let res =await this['setName'](this.username).then(res=>{
            this.$Message.success('成功')
            this.$router.push('/')
        },err=>{
          this.$Message.error('用户名不存在')
        })
        
    }
  }
}
</script>
  
