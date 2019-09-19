<template>
  <div>
    <h1>Users</h1>

    <div class="row">
      <div class="col-md-8 mx-auto">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>email</th>
              <th>date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user,index) in users.data" :key="index">
              <td scope="row">{{index+1}}</td>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.date}}</td>
              <td>
                <router-link
                  class="btn btn-warning btn-sm"
                  :to="{name:'edit',params:{id:user.id}}"
                >Update</router-link>
                <button @click.prevent="del(user.id)" class="btn btn-danger btn-sm">Del</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <pagination :data="users" @pagination-change-page="getResults"></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swal from 'vue-sweetalert2'
// import Swal from 'sweetalert2';
export default {
  data() {
    return {
      users: {}
    };
  },
  methods: {
    getResults(page = 1) {
      axios
        .get("http://localhost:8000/api/user?page=" + page)
        .then(({ data }) => {
          this.users = data;
        });
    },
    load_users() {
      axios.get("http://localhost:8000/api/user").then(({ data }) => {
        this.users = data;
      });
    },
    del(user) {
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.value) {
       axios
          .delete(`http://localhost:8000/api/user/${user}`)
          .then(res => {
            this.load_users();
          })
          .catch(errors => {
            console.log(errors);
          })
    swalWithBootstrapButtons.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})



    }
  },
  mounted() {
    this.load_users();
  }
};
</script>

<style lang="scss" scoped>
</style>
