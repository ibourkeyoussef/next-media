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
          <tbody v-infinite-scroll="load_items" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
            <tr v-for="(item, index) in items" :key="index">
              <td v-text="index +=1"></td>
              <td>
                <img
                  class="card-img-top"
                  :src="'http://localhost:8000/storage/'+ item.image"
                  width="20"
                  alt="image"
                />
              </td>
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
export default {
  data() {
    return {
      items: [],
       limit: 10,
    busy: false
    };
  },
  methods: {
    load_items() {
        this.busy = true;
      axios
        .get("http://localhost:8000/api/item")
        .then(res => {
        const append = res.data.data.slice(
          this.items.length,
          this.items.length + this.limit


        );
        console.log(this.items.length);

        this.items = this.items.concat(append);
        this.busy = false;
      })

    }
  },
  mounted() {
    this.load_items();
  },

};
</script>

<style scoped>
</style>
