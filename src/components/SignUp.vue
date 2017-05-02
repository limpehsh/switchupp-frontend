<template>
  <div>
    <div class="layout-padding">
      <!--<button class="blue round" @click="throttledMethod()">Click me as fast as you can!</button>
      <input type="text" v-model="postBody" @change="createUser()"/>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>-->


      <div class="Header">
        <h1>Sign Up</h1>
      </div>

        <div class="foamContainer">
          <form method="post" action="http://localhost:3001/user/" @submit.prevent="createUser">
            <div class="card bg-grey-2">
              <!-- Username -->
              <div class="floating-label">
                <input v-model.trim="user" required class="full-width"
                 type="text">
                <label>Username</label>
              </div>
              <!-- Password -->
              <div class="floating-label">
                <input v-model.trim="pass" required class="full-width"
                 type="text">
                <label>Password</label>
              </div>
              <!-- Email -->
              <div class="floating-label">
                <input v-model.trim="email" required class="full-width"
                 type="text">
                <label>Email</label>
              </div>
            </div>
            <!-- Sign Up Button -->
            <button type="submit" class="pink full-width">Sign Up</button>
          </form>
        </div>

      </div>
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
// import { required, minLength, between } from 'vuelidate/lib/validators'
/* var instance = axios.create({
  baseURL: 'http://localhost:3001/user/',
  timeout: 1000,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});
*/
export default {
  name: 'sign-up',
  data: () => ({
    // postBody: '',
    // errors: [],
    user: '',
    pass: '',
    email: '',
    errorMail: '',
    errorUser: '',
    errorPass: ''
  }),
  methods: {
    createUser () {
      axios.post('http://localhost:3001/user/', {
        username: this.user,
        password: this.pass,
        email: this.email,
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
.content
{
  display:flex;
  flex-direction: column;
  align-items: center;

}

.formContainer
{
  /* for beautifying the box */
  background-color: #F6F6F6;
  padding: 20px 50px 20px 50px;
  -webkit-box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);
  -moz-box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);
  box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);

  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25vw;
  height: 35vh;
}

.btnContainer
{
  display: flex;
  align-items: center;
  justify-content: center;
  margin:12px;
}
</style>
