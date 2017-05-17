<!--
reportForm
component for reporting form

NOTE:
- v-once here can be removed later if it cause problems
- implement the post and get function for the form
-->

<template>
  <form method="post" @submit.prevent="updateUser()">
    <div class="formContent">
        <h4 class="formHeader"> Update User Details </h4>

        <!-- Username -->
        <div class="floating-label form-field" >
          <input required
                 class = "full-width"
                 name  = "title"
                 maxlength = "100"
                 v-model.trim="user">
          <label>Username</label>
        </div>

        <!-- Email -->
        <div class="floating-label" >
          <input required
                 class = "full-width"
                 maxlength = "30"
                 v-model.trim="email">
          <label>Email</label>
        </div>

        <!-- Password -->
        <div class="floating-label">
          <input required
                 class = "full-width"
                 type  = "password"
                 maxlength = "30"
                 v-model.trim="password">
          <label>Password</label>
        </div>
        <br /><br /><br />

        <!--Submit Button -->
        <div class="form-btn-container">
          <button type="submit" class="form-btn primary raised round">SUBMIT</button>
        </div>

    </div>

  </form>
</template>


<script>
// necessary import for post/get
import Vue from 'vue'
import axios from 'axios'
import VAxios from 'vue-axios'
import { Cookies } from 'quasar'

Vue.use(VAxios, axios)
export default {
  name: 'settingsForm',

  data () {
    return {
      user: '',
      email: '',
      password: ''
    }
  },

  methods: {
    updateUser () {
      axios({
        method: 'put',
        url: 'http://localhost:8081/user/username/' + Cookies.get('session_loggedin'),
        username: this.user,
        email: this.email,
        password: this.pass,
        admin: false,
        reputation: 1,
        type: 1,
        logged: true
      })
      this.user = ''
      this.email = ''
      this.repeatPass = ''
      this.pass = ''
      this.$parent.$parent.$parent.$refs.settingsForm.close()
      console.log('user updated')
      Cookies.set('session_loggedin', this.user, {
        path: '/'
      })
    }
  }
}
</script>


<style scoped>
.formContent
{
  /*display         : flex;
  flex-direction  : column;

  align-content   : center;*/

  padding: 15px 35px 15px 35px;
  position: relative;

}
.formContentAcc
{
  display         : flex;
  flex-direction  : column;
  justify-content : space-around;

  width  : 400px;
  height : 420px;

  padding: 15px 35px 15px 35px
}
.formHeader
{
  text-align: center;
}

.form-field
{
  margin: 5px 0px 5px 0px
}

.textField
{
  max-height: 200px;
}

.form-btn-container
{

  margin-top: 50px;
  padding: 20px 5px 7px 5px;

}

.form-btn
{
  display:block;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  position:absolute;
  bottom:60px;
  left:20px;
  right:20px;
}

img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}

.remove-img-btn
{
  display:block;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  position:absolute;
  bottom:125px;
  left:20px;
  right:20px;
}
</style>
