import item from './routes/item'
import Login from './../views/auth/login.vue'
import Register from './../views/auth/register.vue'
import user from './routes/user'



const routes=[
    ...item,
    ...user,

    {path:'/login',component:Login,name:'login'},
    {path:'/register',component:Register,name:'register'},
    { path: "*", redirect: "/" }


]

export default routes;
