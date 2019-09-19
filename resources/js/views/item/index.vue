<template>
    <div>

   <div class="row">
<div class="col-md-4 mx-auto mb-4">
<h1>Items</h1>
    <router-link class="btn btn-sm btn-primary" :to="{name:'add-item'}">Add Item</router-link>
</div>
   </div>
      <div class="row">
          <div class="col-md-8 mx-auto">
              <table class="table">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>image</th>
                          <th>Title</th>
                          <th>Description</th>

                      </tr>
                  </thead>
                  <tbody>

        <tr v-for="(item, index) in items" :key="index">
            <td v-text="index +=1"></td>
            <td><img class="card-img-top" :src="'http://localhost:8000/storage/'+ item.image" width="20"alt="image"></td>
            <td>{{item.title}}</td>
            <td>{{item.desc}}</td>
            <td>{{item.date}}</td>
        </tr>
                  </tbody>
              </table>
          </div>

      </div>
    </div>
</template>

<script>
import { log } from 'util'
    export default {

        data() {
            return {
                items:[]
            }
        },
         methods: {
             load_items(){
                 axios.get('http://localhost:8000/api/item')
                 .then(({data}) => {
                     this.items = data.data
                    //  console.log(data.data);


                 })
             }
         },
         mounted() {
             this.load_items();
         },
    }
</script>

<style scoped>

</style>
