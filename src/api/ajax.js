/* 
一个能发送ajax请求的函数
1. 统一处理请求异常
2. 异步请求成功的数据不是response, 而是response.data
3. 对post请求参数进行ulencode处理, 而不使用默认的json方式(后台接口不支持)
4. 配置请求超时的时间
*/

import axios from 'axios'
// const qs = require('qs')
import qs from 'qs'
import store from '../vuex/store'
import router from '../router'
// 请求超时的全局配置
axios.defaults.timeout = 20000

 //添加请求拦截器
axios.interceptors.request.use((config) => {
   const { method, data } = config
  //判断是否是post请求，如果是对参数进行ulencode处理
  if (method.toLowerCase === 'post' && data && typeof data === 'object'){
    config.data = qs.stringify(data)
  }

  //如果浏览器有token，就自动携带token
  const token=localStorage.getItem('token_key')
  if(token){
    config.headers.Authorization='token' + token
  }
  return config
})

//添加一个响应拦截器
axios.interceptors.response.use((response) => {
  return response.data
}, (error) => {//统一处理异常
  //alert('请求异常' + error.message)

  const status=error.response.status
  const msg=error.message
  if(status === 401){ //未授权
    //退出登录
    store.dispatch('logout')
    router.replace('/login')
    alert(error.response.data.message)
  }else if(status === 404){
    alert('请求资源不存在')
  }else{
    alert('请求异常:' + msg)
  }

  return new Promise(() => {}) //中断promise链
})

export default axios

