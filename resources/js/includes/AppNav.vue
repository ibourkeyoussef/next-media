<template>
    <div>
<nav class="navbar navbar-expand-sm navbar-light bg-light">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item ">
                <router-link class="nav-link" href="#" v-if="logged"  :to="{name:'item-index'}" >Home </router-link>
            </li>

<li class="nav-item ">
                <router-link class="nav-link" href="#" v-if="logged"  :to="{name:'users'}" >Users </router-link>
            </li>

        </ul>
         <ul class="navbar-nav ml-auto">

           <li class="nav-item">
                <router-link class="nav-link"  v-if="!logged" :to="{name:'login'}" >Login </router-link>
            <a v-else @click.prevent="signOut()" class="nav-link" href="#" role="button">Logout</a>
            </li>
             <li class="nav-item">
                <router-link class="nav-link"  v-if="!logged" :to="{name:'register'}" >Register </router-link>

            </li>

        </ul>

    </div>
</nav>
    </div>
</template>

<script>
    export default {
 data() {
     return {
       logged: User.loggedIn(),
       myUrl: "http://localhost:8000/api/auth/logout"
     }
   },
   methods: {
     signOut() {
       User.logout(this.myUrl)
     }
   }
    }
</script>

<style lang="scss" scoped>

</style>
