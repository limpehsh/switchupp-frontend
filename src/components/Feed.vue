<template>
  <div>
    <div class="layout-padding">
      <div class="feedContent">
        <h2 class="feedHeader">Incident Feed</h2>
        <!-- START PLACEHOLDER-->
        <div class="feedStream">
          <PostBox v-for="post of posts"/>
          <ul v-if="posts && posts.length">
            <li v-for="post of posts">
              <p><strong>Title: {{post.title}}</strong></p>
              <p>Location: {{post.locname}}</p>
              <img :src='post.image' />
              <p>Description: {{post.desc}}</p>
              <p>Vote Score:{{post.votescore}}</p>
              <p>Created by {{post.author}} at {{post.createdAt}}</p>
            </li>
          </ul>
        </div>
        <!-- END PLACEHOLDER-->
        <div class="feedStream">
          <!--<PostBox v-for="post in postPool" :key="post.id"/>-->
        </div>
      </div>

      <!-- button for back to top -->
      <button v-back-to-top.animate="{offset: 500, duration: 200}"
              class="primary circular fixed-bottom-right animate-pop"
              style="margin: 0 15px 15px 0" >
         <i>keyboard_arrow_up</i>
      </button>

      <!-- <a v-back-to-top.animate="1000"
         class="animate-pop play-backtotop non-selectable">
         Back to top
      </a> -->
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
Vue.use(VAxios, axios)
// placeholder, replace later with continuous post extraction from the db
/* var postPool = {
  a: {
    id: '123'
  },
  b: {
    id: '124'
  },
  c: {
    id: '125'
  },
  d: {
    id: '126'
  },
  e: {
    id: '127'
  },
  f: {
    id: '128'
  },
  g: {
    id: '129'
  }
} */
export default {
  components:
  {
    PostBox
  },

  data () {
    return {
      posts: [],
      errors: []
      // postPool
    }
  },

  created () {
    axios.get('http://localhost:8081/report/all/')
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
