//接口请求函数的模块
//每个函数返回的都是promise对象

//根据经纬度获取位置的请求

import axios from './ajax'

const BASE = '/api'

//根据经纬度请求地址
export const reqAddress = (latitude, longitude) => axios.get(BASE + `/position/${latitude},${longitude}`)

//获取食品分类列表
export const reqCategorys = () => axios({
    method:'GET',
    url:BASE + '/index_category'
})

// 根据经纬度获取商铺列表
/* export const reqShops = ({latitude, longitude}) => axios({
    method: 'GET',
    url: BASE + '/shops',
    params: { latitude, longitude }
  }) */
export const reqShops=({latitude,longitude})=>axios.get(BASE + `/shops`,{params:{latitude,longitude}})