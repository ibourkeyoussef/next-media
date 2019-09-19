<template>
  <div>
    <div class="row">
      <h1 class="mx-auto">Update user</h1>
      <div class="col-md-10 mx-auto">
        <form @submit.prevent="Updateuser">
          <div class="form-group">
            <label for="name">name</label>
            <input
              type="text"
              autocomplete="off"
              autofocus
              class="form-control"
              v-model="user.name"
              name="name"
              id="name"
              aria-describedby="helpId"
              placeholder="name"
            />
          </div>
          <div class="form-group">
            <label for>email</label>
            <input
              type="text"
              autocomplete="off"
              class="form-control"
              v-model="user.email"
              name
              id
              aria-describedby="helpId"
              placeholder="email"
            />
          </div>
          <input type="submit" value="Update" class="btn btn-dark mx-3" />
          <router-link href="#" :to="{name:'users'}" class="btn btn-primary">Cancel</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: ""
      }
    };
  },
  created() {
    const url = `http://localhost:8000/api/user/${this.$route.params.id}`;
    axios
      .get(url)
      .then(res => {


        this.user = res.data.data;
        console.log(this.user);

      })
       .catch(err => console.error(err));
  },
  methods: {
    Updateuser() {
      let url = `http://localhost:8000/api/user/` + this.$route.params.id;
      axios
        .patch(url, this.user)
        .then(res =>{
            toastr.warning("Updated success",{timeOut: 5000});
                     this.$router.push({ name: "users" })
         })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
