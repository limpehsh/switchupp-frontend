<template>
  <div>
    <div class="layout-padding">
      <div class="feedContent">
        <h2 class="feedHeader">Incident Feed</h2>
        <div class="feedStream">
          <PostBox v-for="post of posts" :postData="post" :key="post._id"/>
        </div>
      </div>

      <!-- button for back to top -->
      <button v-back-to-top.animate="{offset: 500, duration: 200}"
              class="primary circular fixed-bottom-right animate-pop"
              style="margin: 0 15px 15px 0" >
         <i>keyboard_arrow_up</i>
      </button>

    </div>
  </div>
</template>

<script>
// necessary import for post/get
import Vue from 'vue'
import axios from 'axios'
import VAxios from 'vue-axios'
// posts
import PostBox from './PostBox'
import { Cookies } from 'quasar'

Vue.use(VAxios, axios)

export default {
  components:
  {
    PostBox
  },

  data () {
    return {
      posts: [],
      errors: []
    }
  },
  // Start with fetching newest reports when loading feed
  created () {
    if (Cookies.has('session_loggedin')) {
      this.getUserPosts(Cookies.get('session_loggedin'))
    }
  },
  methods: {
    getUserPosts (username) {
      axios.get('http://sample-env.2fnpngmx26.us-west-2.elasticbeanstalk.com/report/username/' + username)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style scoped>
img
{
  width: 300px;
}
.feedContent
{
  display:flex;
  flex-direction: column;
  align-content: center;
}

.feedHeader
{
  text-align: center;
  font-weight:400;

}
.feedStream
{

}
</style>
