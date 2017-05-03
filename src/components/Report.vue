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
  data: () => ({
    posts: [],
    errors: []
  }),

  // Fetches posts when the component is created.
  created() {
    // http://jsonplaceholder.typicode.com/posts
    axios.get('http://localhost:3001/user/mail/lol@lol.com')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

<style>
</style>
