<template>
  <div>
    <div class="layout-padding">
      <div class="feedContent">
        <h2 class="feedHeader">Incident Feed</h2>
        <!-- START PLACEHOLDER-->
        <div class="feedStream">
          <PostBox v-for="post of posts" :key="post._id"/>
          <ul v-if="posts && posts.length">
            <li v-for="post of posts">
              <p><strong>{{post.title}}</strong></p>
              <p><strong>Location:</strong> {{post.locname}}</p>
              <img :src='post.image' />
              <p><strong>Description:</strong> {{post.desc}}</p>
              <p><strong>Vote Score:</strong> {{post.votescore}}</p>
              <p><strong>Created by</strong> {{post.author}} at {{post.createdAt}}</p>
            </li>
          </ul>
        </div>
        <!-- END PLACEHOLDER-->
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

  created () {
    axios.get('http://localhost:8081/report/newest/')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    /* try {
       const response = await axios.get(`http://localhost:8081/report/newest/`)
       this.posts = response.data
     } catch (e) {
       this.errors.push(e)
     } */
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
