

import item from './routes/item'

import Login from './../views/auth/login.vue'
import Register from './../views/auth/register.vue'



const routes=[
    ...item,

    {path:'/login',component:Login,name:'login'},
    {path:'/register',component:Register,name:'register'},


]

export default routes;
