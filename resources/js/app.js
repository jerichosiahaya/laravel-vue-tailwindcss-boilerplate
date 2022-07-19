window.Vue = require("vue").default;

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import App from './components/App.vue'
import Products from './components/Products.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '/products', component: Products },
    // { path: '/bar', component: Bar }
]

const router = new VueRouter({
    mode: 'history',
    hasbang: false,
    linkActiveClass: "active",
    routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
