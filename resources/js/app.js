require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'
import Main from './Main.vue'
import { store } from './_store';
import Token from './Helpers/Token';
import User from './Helpers/User';
import  VeeValidate from 'vee-validate'
import VueSpinners from 'vue-spinners'
import ScrollLoader from 'vue-scroll-loader'

Vue.use(ScrollLoader)

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
window.Token = Token;
window.User = User;
Vue.use(VueSpinners)
Vue.use(VueRouter);
Vue.use(VeeValidate);



const router = new VueRouter({
    routes,
    mode:'history'
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.forVisiteur)) {
        if (User.loggedIn()) {
            next({
                path:'/'
            })
        }else next()
    }else if (to.matched.some(record => record.meta.forAuth)) {
        if (!User.loggedIn()) {
            next({
                path:'/login'
            })
        }else next()
    }else next()
})

new Vue({
    render: h => h(Main),
    router,
    store
}).$mount("#app");
