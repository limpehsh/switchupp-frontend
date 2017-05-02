<template>
  <div>
    <div class="layout-padding">
      <!-- content for component -->
      <h1 v-if="isLoggedIn">Logged In</h1>
      <h1 v-else>Failed</h1>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  name: 'report',
  data () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    findUser () {
      Vue.axios.get('http://localhost:3001/user/')
        .then((response) => {
          console.log(response.data)
      })
    }
    /* throttledMethod: _.debounce(() => {
      console.log('I only get fired once every two seconds, max!')
    }, 2000) */
  }
}
</script>

<style>
</style>
