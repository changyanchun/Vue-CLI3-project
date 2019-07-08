import Vue from 'vue'

import VueRouter from 'vue-router'

import routes from './routes'
Vue.use(VueRouter)

export default new VueRouter({
    //注册路由
        routes
})