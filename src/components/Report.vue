<template>
  <div>
    <div class="layout-padding">
      <p><strong>{{posts.email}}</strong></p>
      <ul v-if="posts && posts.length">
        <li v-for="post of posts">
          <p><strong>{{post.title}}</strong></p>
          <p>{{post.body}}</p>
        </li>
      </ul>

      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    /* throttledMethod: _.debounce(() => {
  name: 'report',
  }
}
</script>

<style>
</style>
