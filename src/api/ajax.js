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

// 请求超时的全局配置
axios.defaults.timeout = 2000

 //添加请求拦截器
axios.interceptors.request.use((config) => {
   const { method, data } = config
  //判断是否是post请求，如果是对参数进行ulencode处理
  if (method.toLowerCase === 'post' && data && typeof data === 'object'){
    config.data = qs.stringify(data)
  }

  return config
})

//添加一个响应拦截器
axios.interceptors.response.use((response) => {
  return response.data
}, (error) => {//统一处理异常
  alert('请求异常' + error.message)

  return new Promise(() => {}) //中断promise链
})

export default axios

