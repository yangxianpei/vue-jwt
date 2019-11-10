import axios from './../bin/ajaxRequest'

export const getUser= ()=>{
    return axios.request({
        url:'/user'
    })
}

export const getLogin= (username)=>{
  console.log(username);
  return axios.request({
      url:'/login',
      method:'post',
      data:{
        username
      }
  })
}
export const validata= ()=>{
  return axios.request({
      url:'/validata'
  })
}
