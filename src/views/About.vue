<template>
  <div class="about">
    <h1>个人中心</h1>
  </div>
</template>

<script>
import {getUser}from '@/api/api'
export default {
  async mounted(){
      let res= await getUser()
      console.log(res);
  }
}
</script>