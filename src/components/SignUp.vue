<template>
  <div>
    <div class="layout-padding content">
      <!-- Title -->
      <div class="header">
        <h1>Sign Up Page</h1>
      </div>
        <form method="post" action="http://localhost:3001/user/" @submit.prevent="createUser">
          <div class="card bg-grey-2">
            <!-- Username -->
            <div class="floating-label">
              <input v-model.trim="user" required class="full-width"
               @input="$v.user.$touch()"type="text">
              <label>Username</label>
              <p class="text-red" v-if="!$v.user.minLength">Too short a username</p>
            </div>
            <!-- Email -->
            <div class="floating-label">
              <input v-model.trim="email" required class="full-width"
               @input="$v.email.$touch()"type="text">
              <label>Email</label>
              <!--<p v-if="$v.email.required">The email field is required!</p>-->
              <p class="text-red" v-if="!$v.email.email">The input must be a proper email!</p>
            </div>
            <!-- Password -->
            <div class="floating-label">
              <input v-model.trim="pass" required class="full-width"
               @input="$v.pass.$touch()"type="password">
              <label>Password</label>
              <p class="text-red" v-if="!$v.pass.minLength">Password too short</p>
            </div>
            <!-- Repeat Password -->
            <div class="floating-label">
              <input v-model.trim="repeatPass" required class="full-width"
               @input="$v.repeatPass.$touch()" type="password">
              <label>Repeat Password</label>
              <span class="text-red" v-if="!$v.repeatPass.sameAsPassword">Passwords must be identical.</span>
            </div>
          </div>
          <br><br>
        <!-- Sign Up Button -->
        <div class="content">
          <button type="submit" class="pink round items-center">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

/* For Axios */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
/* For routing */
import router from '../router'
/* For throttling/debounce */
// import _ from 'lodash'
/* For the form */
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'
/* var instance = axios.create({
  baseURL: 'http://localhost:3001/user/',
  timeout: 1000,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});
*/
export default {
  name: 'sign-up',
  data () {
    return {
      user: '',
      email: '',
      pass: '',
      repeatPass: ''
    }
  },
  // data: () => ({
  //  email: '',
  //  pass: '',
  //  repeatPass: ''
    // postBody: '',
    // errors: [],
    // user: '',
    // errorMail: '',
    // errorUser: '',
    // errorPass: ''
//  }),
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
  methods: {
    createUser () {
      axios.post('http://localhost:3001/user/', {
        username: this.user,
        email: this.email,
        password: this.pass,
        admin: 'false',
        reputation: '1',
        type: 1
      })
      router.push('about-us')
    }
    /* throttledMethod: _.debounce(() => {
      console.log('I only get fired once every two seconds, max!')
    }, 2000) */
  }
    // async / await version (postPost() becomes async postPost())
    //
    // try {
    //   await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
    //     body: this.postBody
    //   })
    // } catch (e) {
    //   this.errors.push(e)
    // }
}
</script>

<style>
.header
{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
}

.content
{
  display:flex;
  flex-direction: column;
  align-items: center;

}

.btnContainer
{
  display: flex;
  align-items: center;
  justify-content: center;
  margin:12px;
}
.section
{
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.formContainer
{
  /* for beautifying the box */
  background-color: #F6F6F6;
  padding: 10px 20px 20px 30px;
  -webkit-box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);
  -moz-box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);
  box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 40vw;
  height: 30vh;
}
</style>
