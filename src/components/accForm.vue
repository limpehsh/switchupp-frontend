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
        <h4 class="formHeader">Log In</h4>
        <form method="get" action="http://localhost:8081/user/username" @submit.prevent="userLogin">

          <!-- Username -->
          <div class="floating-label" >
            <input required
                   class = "full-width"
                   maxlength = "30"
                   v-model.trim="logInUser">
            <label>Username</label>
          </div>

          <!-- Password -->
          <div class="floating-label">
            <input required
                   class = "full-width"
                   type  = "password"
                   maxlength = "30"
                   v-model.trim="logInPass">
            <label>Password</label>
          </div>

          <div class="form-btn-container">
            <button class="form-btn primary raised" @click="submitLI">Log In</button>
            <span class="formSwitch">Don't have an account? <a @click="toggleType">Sign Up</a></span>
          </div>

        </form>
      </div>

      <!-- sign up form -->
      <div v-else key="signup" class="formContSignUp" >
        <h4 class="formHeader">Sign Up</h4>
        <form method="post" action="http://localhost:8081/user/" @submit.prevent="createUser">

          <!-- Username -->
          <div class="floating-label">
            <input required
                   class = "full-width"
                   name  = "username"
                   maxlength = "30"
                   v-model.trim="user">
            <label>Username</label>
            <div v-if="this.user === ''"></div>
            <p class="text-red" v-else-if="!minLength4User(this.user)">Username needs 4 characters</p>
          </div>

          <!-- E-mail -->
          <div class="floating-label">
            <input required
                   class = "full-width"
                   name  = "email"
                   v-model.trim="email">
            <label>Email</label>
            <div v-if="this.email === ''"></div>
            <p class="text-red" v-else-if="!emailRegex(this.email)">The input must be a proper email!</p>
          </div>

          <!-- Password -->
          <div class="floating-label">
            <input required
                   class = "full-width"
                   type  = "password"
                   name  = "password"
                   maxlength = "30"
                   v-model.trim="pass">
            <label>Password</label>
            <div v-if="this.pass === ''"></div>
            <p class="text-red" v-else-if="!passwrdRegex(this.pass)">Need 6 characters, consisting of one number, one lowercase and one uppercase letter</p>
          </div>

          <!-- REPEAT Password -->
          <div class="floating-label">
            <input required
                   class = "full-width"
                   type  = "password"
                   name  = "repeatPassword"
                   maxlength = "30"
                   v-model.trim="repeatPass">
            <label>Repeat Password</label>
            <p class="text-red" v-if="!this.repeatPasswrdFunc()">Passwords must be identical.</p>
          </div>
          <br />
          <vue-recaptcha class="form-btn-container"
            @verify="onVerify"
            :sitekey="sitekey">
          </vue-recaptcha>
          <div class="form-btn-container">
            <div v-if="!signUpBtnEnabler()">
              <button class="primary raised  form-btn disabled">Sign Up</button>
            </div>
            <div v-else>
              <button class="form-btn primary raised" @click="submitSU">Sign Up</button>
            </div>
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
// for cookies
import { Cookies } from 'quasar'
// for recaptcha
import VueRecaptcha from 'vue-recaptcha'

// Routing
import router from '../router'
Vue.use(VAxios, axios)
export default {
  name: 'accForm',
  components: {
    VueRecaptcha
  },
  data () {
    return {
      sitekey: '6LdxOCEUAAAAAKwxJsyogMFmDzDWzjkB1yo71x1C',
      user: '',
      email: '',
      pass: '',
      repeatPass: '',
      checkUser: [],
      checkEmail: [],
      verifyRecaptcha: '',
      logInUser: '',
      logInPass: '',
      logInGets: [],
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
    },
    // set false
    falseType: function () {
      this.typeLogIn = false
    },
    // set true
    trueType: function () {
      this.typeLogIn = true
    },
    createUser () {
      // check if username on db
      axios({
        method: 'get',
        url: 'http://localhost:8081/user/username/' + this.user,
        timeout: 1000
      })
      .then(response => {
        // JSON responses are automatically parsed.
        this.checkUser = response.data
        if (this.checkUser.username) {
          console.log('username has been taken, please specify another one')
        }
      })
      .catch(e => {
        this.errors.push(e)
      })

      // check if email on db
      axios({
        method: 'get',
        url: 'http://localhost:8081/user/email/' + this.email,
        timeout: 1000
      })
      .then(response => {
        // JSON responses are automatically parsed.
        this.checkEmail = response.data
        if (this.checkEmail.email) {
          console.log('email is used, please specify another one')
        }
      })
      .catch(e => {
        this.errors.push(e)
      })

      // create user only if both email and username do not exist yet
      if (!this.checkUser.username && !this.checkEmail.email) {
        axios.post('http://localhost:8081/user/', {
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
        this.pass = ''
        this.$parent.$parent.$parent.$refs.accountForm.close()
        console.log('new user created')
        router.push('/')
      }
    },
    minLength4User (str) {
      var minNum = 4
      var bool = true
      if (str.length < minNum) {
        bool = false
      }
      else {
        bool = true
      }
      return bool
    },
    passwrdRegex (str) {
      var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
      return re.test(str)
    },
    repeatPasswrdFunc () {
      if (this.repeatPass === this.pass) {
        return true
      }
      else {
        return false
      }
    },
    emailRegex (str) {
      var re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      return re.test(str)
    },
    onVerify (response) {
      this.verifyRecaptcha = response
    },
    signUpBtnEnabler () {
      var temp = false
      if (this.verifyRecaptcha === '' || !this.passwrdRegex(this.pass) ||
          !this.minLength4User(this.user) || !this.emailRegex(this.email) ||
          !this.repeatPasswrdFunc()) {
        temp = false
      }
      else {
        temp = true
      }
      return temp
    },
    userLogin () {
      axios({
        method: 'get',
        url: 'http://localhost:8081/user/username/' + this.logInUser,
        timeout: 1000
      })
      .then(response => {
        // JSON responses are automatically parsed.
        this.logInGets = response.data
        this.executeLogin()
      })
      .catch(e => {
        this.errors.push(e)
        // console.log('error with login')
      })
    },
    executeLogin () {
      if ((this.logInGets.password === this.logInPass) && this.logInGets.username) {
        this.$parent.$parent.$parent.$refs.accountForm.close()
        console.log(this.logInGets.password)
        router.push('/')
        Cookies.set('session_loggedin', this.logInUser, {
          path: '/'
        })
        this.logInUser = ''
        this.logInPass = ''
      }
    }
  },

  props: {
    login: Boolean
  }
}
</script>

<style scoped>
/* NOTE: styling problem with Quasar modals, maximum height is around 600px,
   overflow will not be hidden, max-height cannot be overriden
*/

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

  width  : 500px;
  height : 420px;

  padding: 15px 35px 15px 35px
}

.formContSignUp
{
  display         : flex;
  flex-direction  : column;
  justify-content : space-around;

  width  : 500px;
  height : 600px;



  padding: 5px 40px 0px 40px;
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
  margin-top: 0px;
  padding: 25px 0px 0px 0px;
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
