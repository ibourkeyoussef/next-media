<template>
  <div>
    <h1>Created</h1>

    <div class="row">
      <form class="col-md-8 mix-auto" @submit.prevent="store_item">
        <div class="form-group">
          <label for="first_name">Title :</label>
          <input
            type="text"
            v-validate="'required'"
            name="title"
            v-model="item.title"
            class="form-control"
            :class="{ 'is-invalid':errors.has('title') }"
          />
           <div v-if="errors.has('title')" class="invalid-feedback">{{ errors.first('title') }}</div>
        </div>
        <div class="form-group">
          <label for="first_name">Description :</label>
          <input
            type="text"
            v-validate="'required'"
            name="desc"
            v-model="item.description"
            class="form-control"
            :class="{ 'is-invalid':errors.has('desc') }"
          />
          <div v-if="errors.has('desc')" class="invalid-feedback">{{ errors.first('desc') }}</div>
        </div>
         <div class="form-group">
          <label for="last_name">Image :</label>
          <input type="file" @change="upImage($event)" v-validate="'required|image:webp'" name="image" class="form-control" id="last_name" :class="{ 'is-invalid':errors.has('image') }" />
         <div v-if="errors.has('image')" class="invalid-feedback">{{ errors.first('image') }}</div>
        </div>

        <input type="submit" value="Create Item" />
      </form>
      {{$data}}
    </div>
    <br />
    <br />

    <router-link class="btn btn-sm btn-dark" :to="{name:'item-index'}">Back</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        title: "",
        description: "",
        image: "",
      }
    };
  },
  methods: {
      upImage(event) {
      console.log(event.target.files[0]);
      this.item.image = event.target.files[0];
    },
    store_item() {
      this.$validator.validate().then(valid => {
        if (valid) {
           let formdata = new FormData();
          Object.keys(this.item).forEach(key =>
            formdata.append(key, this.item[key])
          );
            axios
            .post(`http://localhost:8000/api/item`, formdata)
            .then(response => {
              console.log("test");

              this.$router.push({name:'item-index'});
            })
            .catch(errors => {
              console.log("Error");

              console.log(errors.response);
            });
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
