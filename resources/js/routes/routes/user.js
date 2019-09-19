export default [

    {
        path:'/users',
        component:require('./../../views/users/users.vue').default,
        name:'users',
        meta: { forAuth: true }
    },

    {
        path:'/user/:id/edit',
        component:require('./../../views/users/edit.vue').default,
        name:'edit',
        meta: { forAuth: true }
    },




]
