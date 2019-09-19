import Index from './../../views/item/index.vue'
import Additem from './../../views/item/create.vue'
import Edititem from './../../views/item/edit.vue'


export default [

    {path:'/',component:Index,name:'item-index', meta: { forAuth: true }},
    {path:'/item/:id/edit',component:Edititem,name:'item-edit' ,meta: { forAuth: true }},
    {path:'/item/create',component:Additem,name:'add-item',meta: { forAuth: true }},

]
