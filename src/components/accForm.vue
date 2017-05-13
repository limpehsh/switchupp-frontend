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
        <form method="get" action="http://localhost:3001/user/username" @submit.prevent="userLogin">

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
      <div v-else key="signup" class="formContent" >
        <h4 class="formHeader">Sign Up</h4>
        <form method="post" action="http://localhost:3001/user/" @submit.prevent="createUser">

          <!-- Username -->
          <div class="floating-label">
            <input required
                   class = "full-width"
                   name  = "username"
                   maxlength = "30"
                   v-model.trim="user"
                   @input="$v.user.$touch()">
            <label>Username</label>
            <!-- <p class="text-red" v-if="!$v.user.minLength">Too short a username</p> -->
          </div>

          <!-- E-mail -->
          <div class="floating-label">
            <input required
                   class = "full-width"
                   name  = "email"
                   v-model.trim="email"
                   @input="$v.email.$touch()" >
            <label>Email</label>
            <!-- <p class="text-red" v-if="!$v.email.email">The input must be a proper email!</p> -->
          </div>

          <!-- Password -->
          <div class="floating-label">
            <input required
                   class = "full-width"
                   type  = "password"
                   name  = "password"
                   maxlength = "30"
                   v-model.trim="pass"
                   @input="$v.pass.$touch()" >
            <label>Password</label>
            <!-- <p class="text-red" v-if="!$v.pass.minLength">Password too short</p> -->
          </div>

          <!-- REPEAT Password -->
          <!-- <div class="floating-label">
            <input required
                   class = "full-width"
                   type  = "password"
                   name  = "repeatPassword"
                   maxlength = "30"
                   v-model.trim="repeatPass"
                   @input="$v.repeatPass.$touch()" >
            <label>Repeat Password</label>
            <p class="text-red" v-if="!$v.repeatPass.sameAsPassword">Passwords must be identical.</p>
          </div> -->
          <br />
          <vue-recaptcha
            @verify="onVerify"
            :sitekey="sitekey">
          </vue-recaptcha>
          <div class="form-btn-container">
            <div v-if="!recaptchaSuccess()">
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
import { Cookies } from 'quasar'
import VueRecaptcha from 'vue-recaptcha'
// To display the form errors
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'

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
      signUpSucces: false,
      logInUser: '',
      logInPass: '',
      logInGets: [],
      logInSuccess: false,
      typeLogIn: this.login
    }
  },
  validations: {
    user: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    pass: {
      required,
      minLength: minLength(6)
    },
    repeatPass: {
      sameAsPassword: sameAs('pass')
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
        url: 'http://localhost:3001/user/username/' + this.user,
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
        url: 'http://localhost:3001/user/email/' + this.email,
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
        axios.post('http://localhost:3001/user/', {
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
        this.signUpSucces = true
        this.$parent.$parent.$parent.$refs.accountForm.close()
        console.log('new user created')
        router.push('/')
      }
    },
    onVerify (response) {
      this.verifyRecaptcha = response
    },
    recaptchaSuccess () {
      var temp = false
      if (this.verifyRecaptcha === '') {
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
        url: 'http://localhost:3001/user/username/' + this.logInUser,
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
        this.logInSuccess = true
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
  margin-top: 5px;
  padding: 5px 5px 7px 5px;
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
