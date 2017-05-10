<!--
accFormContent
Component containing the form fields for sign up and log in form

TODO:
- implement the form post action for log in and sign up

NOTE:
- currently the methods are still a stub/placeholder for the actual
  function
-->

<template >
  <transition name="fade" mode="out-in" >
    <!-- log in form -->
    <div v-if="this.typeLogIn === true" key="login" class="formContent">
      <form>
        <h4 class="formHeader">Log in</h4>
        <div class="floating-label" >
          <input required
                 class = "full-width"
                 name  = "username"
                 maxlength = "30">
          <label>Username</label>
        </div>
        <div class="floating-label">
          <input required
                 class = "full-width"
                 type  = "password"
                 name  = "password"
                 maxlength = "30">
          <label>Password</label>
        </div>
        <div class="form-btn-container">
          <button class="form-btn primary raised" @click="submitLI">Log In</button>
          <span class="formSwitch">Don't have an account? <a @click="toggleType">Sign Up</a></span>
        </div>
      </form>
    </div>

    <!-- sign up form -->
    <div v-else key="signup" class="formContent" >
      <form>
        <h4 class="formHeader">Sign Up</h4>
        <div class="floating-label">
          <input required
                 class = "full-width"
                 name  = "username"
                 maxlength = "30">
          <label>Username</label>
        </div>
        <div class="floating-label">
          <input required
                 class = "full-width"
                 name  = "email" >
          <label>Email</label>
        </div>
        <div class="floating-label">
          <input required
                 class = "full-width"
                 type  = "password"
                 name  = "password"
                 maxlength = "30" >
          <label>Password</label>
        </div>
        <div class="form-btn-container">
          <button class="form-btn primary raised" @click="submitSU">Sign Up</button>
          <span class="formSwitch">Already have an account? <a @click="toggleType">Log in</a></span>
        </div>
        </form>
    </div>
  </transition>
</template>


<script>
// necessary import for post/get
import Vue from 'vue'
import axios from 'axios'
import VAxios from 'vue-axios'
// currently commented out to silence linter
// import router from '../router'

Vue.use(VAxios, axios)

export default {
  name: 'accForm',

  data: function () {
    return {
      typeLogIn: this.login
    }
  },

  methods:
  {
    // toggling between the log in and sign up form
    toggleType: function () {
      this.typeLogIn = !this.typeLogIn
    },
    resetType: function () {
      this.typeLogIn = true
    },
    // placeholder for sign up button press
    submitSU: function () {
      console.log('Sign Up Clicked')
    },
    // placeholder for log in button press
    submitLI: function () {
      console.log('Log In Clicked')
    }
  },

  props: {
    login: Boolean
  }
}
</script>

<style scoped>
/* for transition effect, vue thing */
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.formContent
{
  display         : flex;
  flex-direction  : column;
  justify-content : space-around;

  width  : 400px;
  height : 420px;

  padding: 15px 35px 15px 35px
}

.form-btn
{
  width: 250px;
}

.formHeader
{
  text-align: center;
}

.form-btn-container
{
  margin-top: 20px;
  padding: 20px 5px 7px 5px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.formSwitch
{
  font-size: 12px;
  margin-top: 10px;
  padding: 15px 15px 15px 15px;

}

.formSwitch a:hover
{
  color: !important #122041 ;
  text-decoration: underline;
}
</style>
