//接口请求函数的模块
//每个函数返回的都是promise对象

//根据经纬度获取位置的请求
 

import ajax from './ajax'

const BASE = '/api'

//根据经纬度请求地址
export const reqAddress = (latitude, longitude) => ajax.get(BASE + `/position/${latitude},${longitude}`)

//获取食品分类列表
export const reqCategorys = () => ajax({
    method:'GET',
    url:BASE + '/index_category',
    headers: {
      needToken: true
    }
})

// 根据经纬度获取商铺列表
export const reqShops = ({latitude, longitude}) => ajax({
    method: 'GET',
    url: BASE + '/shops',
    params: { latitude, longitude },
    headers: {
      needToken: true
    }
  })
//export const reqShops=({latitude,longitude})=>ajax.get(BASE + `/shops`,{params:{latitude,longitude}})

//发送短信验证码
//export const reqSendCode=(phone)=>ajax.get(BASE + '/sendcode',{params:{phone}})

export const reqSendCode = (phone) => ajax({
  method: 'GET',
  url: BASE + '/sendcode',
  params: { phone }
})


//手机号码发送短信验证请求
export const reqSmsLogin = ({phone, code}) => ajax({
  method: 'POST',
  url: BASE + '/login_sms',
  data: {
    phone,
    code
  }
})

//用户名密码登录请求
//export const reqPwdLogin=({name,pwd,captcha})=>ajax.post(BASE + '/login_pwd',{name,pwd,captcha})

export const reqPwdLogin = ({ name, pwd, captcha }) => ajax({
  method: 'POST',
  url: BASE + '/login_pwd',
  data: {
    name,
    pwd,
    captcha
  }
})
//自动登录的请求
export const reqAutoLogin=() => ajax({
  //method:'GET',
  url:BASE + '/auto_login',
  headers:{
    needToken:true
  }
})
