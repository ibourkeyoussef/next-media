<template>
    <div>
    <div class="row justify-content-center mt-4">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>

                <div class="card-body">
                    <form >


                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" v-model="user.name" class="form-control" name="name"  required autocomplete="name" autofocus>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                            <div class="col-md-6">
                                <input id="email" type="email" v-model="user.email" class="form-control" name="email"  required autocomplete="email">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" v-model="user.password" class="form-control" name="password" required autocomplete="new-password">
                            </div>
                        </div>



                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="button" @click="register"  class="btn btn-primary">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
     export default {
    data: () => ({
      valid: true,

      user: {
           name: '',
           email: '',
           password: '',
      },

    }),

    methods: {
      register(){
           User.signUp( this.user);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
